var calcApp = new Vue({
	el: "#calc-app",
	store,
	data: {
		appCreated: true,
		roadMap: store.state.roadMap,
		selectOptions: store.state.selectOptions,
		subInputsDisabledList: store.state.subInputsDisabledList,
		optionsSize: store.state.optionsSize,
		_store: store.state,
		plusTotalOptions: store.state.plusTotalOptions,
		calc: store.state.calc,
		categoryOptions: Object.freeze(categoryOptions),
		options: Object.freeze(options),
		urlOnServer: "",
		// urlOnServer: "/local/templates/okamen",
		urlImg: "./assets/images/calc-svg/",
		formSizeError: {
			top: false,
			left: false,
			right: false,
		},
		roundingActive: false,
		roundingActiveError: true,
		materials: {
			allList: null,
			filterList: null,
			scrollLoadingStep: 20,
			filterScrolLoading: 20,
			filter: {
				category: "Любой",
				color: "Любой",
			},
			filterInput: {
				category: ["Любой"],
				color: ["Любой"],
			},
		},
		totalList: [],
		firstСhooseСategory: false,
	},
	// fix:
	// m2
	methods: {
		roadMapTo: function (index) {
			// Переключения вкладок с опциями
			store.commit("roadMapTo", index);
			if (index === Object.keys(this.roadMap).length - 1) {
				this.totalListCreate();
			}
		},
		chooseOption: function (key, input, depiction, event) {
			// Добавляет выбранную опцию в state.selectOptions
			store.commit({
				type: "chooseOption",
				key,
				value: input.value,
				prise: input.prise,
				text: input.text,
				depiction,
				subInputs: input.subInputs,
				checked: event.target.checked,
				typeInput: event.target.type,
				valueInput: event.target.value,
			});
		},
		nextButtonDisabled: function (obItem, key) {
			// Убирает disabled у следующей вкладки eсли заполнены обязательные поля
			let requiredOk = [];
			for (const item in obItem) {
				const required = obItem[item].required;
				(required && this.selectOptions[item].value != "") || !required ? requiredOk.push(true) : requiredOk.push(false);
			}
			if (requiredOk.every((item) => item == true)) store.commit("nextButtonDisabled", key);
		},
		createSelectOptions: function (value) {
			store.commit("chooseСategory", value);

			if (this.firstСhooseСategory) {
				// Сбрасывает все настойки
				store.commit("createSelectOptionsDefault");
				for (const key in this.formSizeError) this.formSizeError[key] = false;
				this.roundingActive = false;
				this.roundingActiveError = true;
				for (const input of this.$refs.inputOption) {
					input.checked = false;
				}
				document.querySelector(":root").style.setProperty("--form-rounding", "2px");
			}
			this.firstСhooseСategory = true;

			// Формирует selectOptions из всех имеющихся опций в options
			store.commit("createSelectOptions");

			// Убирает disabledButton на страницах без обязательных полей
			const renderOptions = this.options[this.selectOptions.category];
			for (const key in renderOptions) {
				this.nextButtonDisabled(renderOptions[key], key);
			}

			// Генерирует option в фильтрах материала
			for (const keyList in this.materials.allList) {
				for (const keyFilter in this.materials.filterInput) {
					const item = this.materials.allList[keyList][keyFilter],
						filter = this.materials.filterInput[keyFilter];
					if (!filter.includes(item)) {
						this.materials.filterInput[keyFilter].push(item);
					}
				}
			}
			this.filterMaterialsList();

			this.scrollLoading(this.materials.scrollLoadingStep);
		},
		subInputsDisabled: function (optionKey, windowKey, event) {
			// Убирает и добавляет disabled у subInputs
			store.commit({
				type: "subInputsDisabled",
				optionKey,
				windowKey,
				checked: event.target.checked,
			});
			if (event.target.checked === false) {
				const list = event.target.parentElement.nextElementSibling.querySelectorAll('input[type="number"]');
				for (const item of list) item.value = 0;
			}
		},
		roundingAngle: function (angle) {
			// Выбор угла закругления
			store.commit({
				type: "roundingAngle",
				angle,
			});
		},
		formSize: function (position, event) {
			store.commit({
				type: "formSize",
				position,
				value: Number(event.target.value),
			});
		},
		formSizeErrorDefault: function () {
			// Сбрасывает ошибки формы
			for (const key in this.formSizeError) {
				this.formSizeError[key] = false;
			}
		},
		selectFilter: function (filter, event) {
			// Выбор фильтра в материалах
			this.materials.filter[filter] = event.target.value;
			this.filterMaterialsList();
		},
		filterMaterialsList: function () {
			// Фильтрует список с учетом выбранных значений в materials.filter
			let lest = {};
			for (const listKey in this.materials.allList) {
				let correct = [];
				for (const filterKey in this.materials.filter) {
					const list = this.materials.allList[listKey][filterKey],
						filter = this.materials.filter[filterKey];
					filter === list || filter === "Любой" ? correct.push(true) : correct.push(false);
				}
				if (correct.every((item) => item == true)) lest[listKey] = this.materials.allList[listKey];
			}
			this.materials.filterList = lest;
			this.materials.filterScrolLoading = this.materials.scrollLoadingStep;
		},
		chooseMaterial: function (height, id) {
			// Выбор материала
			store.commit({
				type: "chooseMaterial",
				height,
				id,
			});
		},
		chooseHeight: function (input) {
			// Выбор толщину материала
			store.commit("chooseHeight", input);
		},
		areaPrise: function () {
			// Подсчитывает стоимость площади
			if (this.selectOptions.form.value !== "") {
				const prise = Number(this.selectOptions.materials.chooseHeight.price),
					area = this.optionsSize.size[this.selectOptions.form.value].area;
				store.commit({
					type: "calcPlusTotal",
					total: Math.round(prise * area),
					key: "array",
				});
			}
		},
		roundingPrise: function () {
			// Цена скругления края
			const number = this.optionsSize.roundingNumber,
				prise = Number(this.selectOptions.rounding.prise);
			store.commit({
				type: "calcPlusTotal",
				total: number * prise,
				key: "rounding",
			});
		},
		totalListCreate: function () {
			// Формирует список выборных опций на страницы Итог
			let list = [];
			for (const key in this.selectOptions) {
				let date = { text: "", depiction: "", prise: "" };
				const item = this.selectOptions[key];
				if (!["category", "materials", "form", "rounding", "notchMixer", "wallPanel"].includes(key)) {
					if (item.text === undefined) {
						for (const key in item) {
							date = { text: "", depiction: "", prise: "" };
							date.text = item[key].text;
							date.depiction = item[key].depiction;
							date.prise = item[key].prise;
							list.push(date);
						}
					} else if (item.text !== "") {
						date.text = item.text;
						date.depiction = item.depiction;
						date.prise = item.prise;
						list.push(date);
					}
				}
				if (key === "rounding" && this.optionsSize.roundingNumber > 0) {
					date.depiction = item.depiction;
					date.text = `Тип: ${item.text}, кол.во: ${this.optionsSize.roundingNumber}`;
					date.prise = this.calc.plusTotal.rounding;
					list.push(date);
				}
				if (key === "notchMixer") {
					for (const key in item) {
						const value = Number(item[key].value);
						if (value > 0) {
							date = { text: "", depiction: "", prise: "" };
							date.text = `${item[key].text}, кол.во: ${item[key].value}`;
							date.depiction = item[key].depiction;
							date.prise = item[key].prise * value;
							list.push(date);
						}
					}
				}
				if (key === "wallPanel") {
					const options = this.selectOptions.wallPanel;
					if (options.weight !== undefined && options.height !== undefined) {
						const total = (options.weight.value * options.height.value) / 10000;
						date.text = `Площадь: ${total.toFixed(2)} <span class="m2"> м2</span>`;
						date.depiction = options.weight.depiction;
						date.prise = Math.round(total * options.weight.prise);
						list.push(date);
					}
					if (options.number !== undefined) {
						date = { text: "", depiction: "", prise: "" };
						date.text = `${options.number.text}: ${options.number.value}`;
						date.depiction = options.number.depiction;
						date.prise = Math.round(Number(options.number.value) * options.number.prise);
						list.push(date);
					}
				}
			}
			this.totalList = list;
		},
		scrollLoading: function (showNumber = 20) {
			const number = showNumber;
			for (const key in this.$refs.materialList) {
				const elemtnt = this.$refs.materialList[key];
				elemtnt.addEventListener("scroll", () => {
					if (elemtnt.scrollHeight - 20 <= elemtnt.offsetHeight + elemtnt.scrollTop) {
						this.materials.filterScrolLoading += number;
					}
				});
			}
		},
	},
	computed: {
		roundingNorm() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.topLeft) style += "border-top-left-radius: 2px;";
			if (!this.optionsSize.rounding.topRight) style += "border-top-right-radius: 2px;";
			if (!this.optionsSize.rounding.bottomRight) style += "border-bottom-right-radius: 2px;";
			if (!this.optionsSize.rounding.bottomLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		roundingGBody() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.topLeft) style += "border-top-left-radius: 2px;";
			if (!this.optionsSize.rounding.topRight) style += "border-top-right-radius: 2px;";
			if (!this.optionsSize.rounding.centerLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		roundingPBody() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.topLeft) style += "border-top-left-radius: 2px;";
			if (!this.optionsSize.rounding.topRight) style += "border-top-right-radius: 2px;";
			return style;
		},
		roundingGRight() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.bottomRight) style += "border-bottom-right-radius: 2px;";
			if (!this.optionsSize.rounding.bottomCenterLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		roundingPLeft() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.bottomCenterRight) style += "border-bottom-right-radius: 2px;";
			if (!this.optionsSize.rounding.bottomLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		chooseForm() {
			for (const key in this.optionsSize.visible) {
				if (this.optionsSize.visible[key]) return true;
			}
		},
		roundingActiveF() {
			if (this.roundingActiveError && this.roundingActive && this.optionsSize.roundingNumber === 0) {
				this.roundingActiveError = false;
				return true;
			} else {
				return false;
			}
		},
		optionSizeImg() {
			const materialsId = this.selectOptions.materials.id;
			if (materialsId !== "") {
				return `background-image: url(${this.materials.allList[materialsId].imgUrl});`;
			}
		},
	},
	watch: {
		"optionsSize.size.formNorm": {
			// Рассчитывает площадь и предает ошибки
			handler: function (val) {
				let area = 0;
				if (val.bottom > 0 && val.left > 0) {
					area = (val.bottom * val.left) / 10000;
					store.commit({
						type: "formSize",
						position: "area",
						value: area,
					});
				}
			},
			deep: true,
		},
		"optionsSize.size.formG": {
			// Рассчитывает площадь и предает ошибки
			handler: function (val) {
				let area = 0;
				if (val.top > 0 && val.left > 0 && val.right > 0 && val.bottom > 0) {
					this.formSizeErrorDefault();
					if (val.left >= val.right) {
						this.formSizeError.right = true;
						return false;
					} else if (val.bottom >= val.top) {
						this.formSizeError.top = true;
						return false;
					}
					area = (val.top * val.left + (val.right - val.left) * val.bottom) / 10000;
					store.commit({
						type: "formSize",
						position: "area",
						value: area,
					});
				}
			},
			deep: true,
		},
		"optionsSize.size.formP": {
			// Рассчитывает площадь и предает ошибки
			handler: function (val) {
				let area = 0;
				if (val.top > 0 && val.left > 0 && val.right > 0 && val.bottomRight > 0 && val.bottomLeft > 0 && val.center > 0) {
					this.formSizeErrorDefault();
					if (val.center >= val.left) {
						this.formSizeError.left = true;
						return false;
					} else if (val.center >= val.right) {
						this.formSizeError.right = true;
						return false;
					} else if (val.bottomRight + val.bottomLeft >= val.top) {
						this.formSizeError.top = true;
						return false;
					}
					area = (val.left * val.bottomLeft + val.right * val.bottomRight + (val.top - (val.bottomLeft + val.bottomRight)) * val.center) / 10000;
					store.commit({
						type: "formSize",
						position: "area",
						value: area,
					});
				}
			},
			deep: true,
		},
		"selectOptions.form.value": function () {
			// Скрывает / показывает выбранную форму
			if (this.selectOptions.form.value !== "") {
				store.commit("sizeVisible");
				store.commit("roundingDefalt");
			}
		},
		"selectOptions.rounding.value": function () {
			// Скругления края столешницы
			const option = this.selectOptions?.rounding?.value;
			if (option !== undefined) {
				let rounding = 2,
					active = false;
				if (option === "a") {
					store.commit("roundingDefalt");
					rounding = 2;
				} else if (option === "b") {
					rounding = 20;
					active = true;
				} else if (option === "c") {
					rounding = 40;
					active = true;
				}
				this.roundingActive = active;
				document.querySelector(":root").style.setProperty("--form-rounding", rounding + "px");
				this.roundingPrise();
			}
		},
		selectOptions: {
			// Подсчитывает общую стоимость всех выбранных опций с plusTotal
			handler: function () {
				let total = 0;
				for (const index in this.plusTotalOptions) {
					const key = this.plusTotalOptions[index];
					let prose = 0;
					if (this.selectOptions[key].prise === undefined) {
						for (const subIndex in this.selectOptions[key]) {
							prose += this.selectOptions[key][subIndex].prise;
						}
					} else {
						prose = this.selectOptions[key].prise;
					}
					total += prose;
				}
				store.commit({
					type: "calcPlusTotal",
					total,
					key: "options",
				});
				this.areaPrise();
			},
			deep: true,
		},
		"optionsSize.size": {
			// Подсчитывает стоимость площади
			handler: function () {
				this.areaPrise();
			},
			deep: true,
		},
		"optionsSize.roundingNumber": function () {
			// Цена скругления края
			if (this.selectOptions?.rounding?.value !== undefined) this.roundingPrise();
		},
		"selectOptions.notchMixer": {
			// Цена вырез под смеситель
			handler: function () {
				let total = 0;
				for (const key in this.selectOptions.notchMixer) {
					const prise = this.selectOptions.notchMixer[key].prise,
						value = Number(this.selectOptions.notchMixer[key].value);
					total += prise * value;
				}
				store.commit({
					type: "calcPlusTotal",
					total,
					key: "notchMixer",
				});
			},
			deep: true,
		},
		"selectOptions.wallPanel": {
			// Цена cтеновые панели из камня
			handler: function () {
				const options = this.selectOptions.wallPanel ? this.selectOptions.wallPanel : false;
				let total = 0;
				if (options.weight !== undefined && options.height !== undefined) {
					total += ((Number(options.weight.value) * Number(options.height.value)) / 10000) * options.weight.prise;
				}
				if (options.number !== undefined) total += options.number.prise * Number(options.number.value);
				store.commit({
					type: "calcPlusTotal",
					total,
					key: "wallPanel",
				});
			},
			deep: true,
		},
		"calc.plusTotal": {
			// Подсчитывает предварительную стоимость
			handler: function () {
				let total = 0;
				for (const key in this.calc.plusTotal) {
					total += this.calc.plusTotal[key];
				}
				store.commit("calcTotal", total);
			},
			deep: true,
		},
	},
	created: function () {
		fetch(this.urlOnServer + "/assets/scripts/materials.json")
			.then((r) => r.json())
			.then((json) => {
				this.materials.allList = json;
			});
	},
});
