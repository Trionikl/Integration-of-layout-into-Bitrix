const categoryOptions = {
	category: {
		heading: "Выберите подходящую категорию *",
		required: true,
		type: "radio",
		inputsImg: [
			{
				value: "table",
				text: "Столешница",
				img: "category-table.svg",
			},
			// {
			// 	value: "windowsill",
			// 	text: "Подоконник",
			// 	img: "category-windowsill.svg",
			// },
			// {
			// 	value: "stage",
			// 	text: "Ступени",
			// 	img: "category-stage.svg",
			// },
		],
	},
};

const options = {
	table: {
		form: {
			form: {
				heading: "Выберите подходящую форму столешницы *",
				required: true,
				type: "radio",
				inputsImg: [
					{
						value: "formNorm",
						text: "Прямая",
						img: "form-norm.svg",
					},
					{
						value: "formG",
						text: "Г-образна",
						img: "form-g.svg",
					},
					{
						value: "formP",
						text: "П-образна",
						img: "form-p.svg",
					},
				],
			},
		},
		materials: {
			crutchDisabled: {
				required: true,
				optionsClass: "crutchDisabled",
			},
		},
		parameters: {
			// thickness: {
			// 	heading: "Выберете подходящую толщину столешнице",
			// 	required: true,
			// 	type: "radio",
			// 	inputs: [
			// 		{
			// 			value: "two",
			// 			text: "2 см",
			// 			detail: "",
			// 			prise: 0,
			// 		},
			// 		{
			// 			value: "three",
			// 			text: "3 см",
			// 			detail: "(3 000 ₽ за 1 м2)",
			// 			prise: 3000,
			// 		},
			// 	],
			// },
			rounding: {
				heading: "Выберите скругления угла столешницы",
				required: false,
				type: "radio",
				infoBlock: {
					text: "Количество углов: ",
					infoPaер1: "optionsSize",
					infoPaер2: "roundingNumber",
				},
				depiction: "Cкругления углов",
				inputsImg: [
					{
						value: "a",
						text: "А",
						img: "rounding-0.svg",
						detail: "",
						prise: 0,
					},
					{
						value: "b",
						text: "Б",
						img: "rounding-1.svg",
						detail: "(2 000 ₽ за 1 уг.)",
						prise: 2000,
					},
					{
						value: "c",
						text: "В",
						img: "rounding-2.svg",
						detail: "(4 000 ₽ за 1 уг.)",
						prise: 4000,
					},
				],
			},
			chamferFront: {
				heading: "Выберите подходящее форму скругления края столешницы",
				required: false,
				type: "radio",
				plusTotal: true,
				depiction: "Cкругления края столешницы",
				inputsImg: [
					{
						value: "a",
						text: "Простой",
						img: "chamfer-01.svg",
						detail: "(2 000 ₽ за 1м)",
						prise: 2000,
					},
					{
						value: "b",
						text: "Сложный",
						img: "chamfer-03.svg",
						detail: "(2 300 ₽ за 1м)",
						prise: 2300,
					},
					{
						value: "c",
						text: "Сборный",
						img: "chamfer-08.svg",
						detail: "(2 600 ₽ за 1м)",
						prise: 2600,
					},
				],
			},
			crutchDisabled: {
				required: true,
				optionsClass: "crutchDisabled",
			},
		},
		notch: {
			notchSink: {
				heading: "Выберите нужные вам вырезы в столешницы",
				required: false,
				type: "radio",
				// type: "checkbox",
				optionsClass: "subInputs",
				plusTotal: true,
				subInputs: {
					text: "Вырез под мойку",
					detail: "(от 3 000 ₽)",
					value: "sink",
					depiction: "Вырез под мойку",
					inputs: [
						{
							value: "up",
							text: "Поверх столешницы",
							detail: "(от 3 000 ₽)",
							prise: 3000,
						},
						{
							value: "down",
							text: "Снизу столешницы",
							detail: "(от 4 000 ₽)",
							prise: 4000,
						},
					],
				},
			},
			notchHob: {
				heading: "",
				required: false,
				type: "radio",
				optionsClass: "subInputs",
				plusTotal: true,
				subInputs: {
					text: "Вырез под варочную панель",
					detail: "(от 3 000 ₽)",
					value: "hob",
					depiction: "Вырез под варочную панель",
					inputs: [
						{
							value: "up",
							text: "Поверх столешницы",
							detail: "(от 3 000 ₽)",
							prise: 3000,
						},
						{
							value: "flush",
							text: "Вровень со столешницей",
							detail: "(от 5 000 ₽)",
							prise: 5000,
						},
					],
				},
			},
			notchMixer: {
				heading: "",
				required: false,
				type: "checkbox",
				optionsClass: "subInputs",
				subInputs: {
					text: "Вырез под смеситель",
					detail: "(от 1 000 ₽)",
					value: "mixer",
					depiction: "Вырез под смеситель",
					inputNumber: [
						{
							value: "up",
							text: "До 30 мм",
							detail: "(1 000 ₽)",
							textInput: "",
							prise: 1000,
						},
						{
							value: "flush",
							text: "От 30 до 65 мм",
							detail: "(1 300 ₽)",
							textInput: "",
							prise: 1300,
						},
						{
							value: "down",
							text: "Свыше 65 мм",
							detail: "(1 500 ₽)",
							textInput: "",
							prise: 1500,
						},
					],
				},
			},
			notchOther: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "subInputs",
				depiction: "",
				inputs: [
					{
						value: "other",
						text: "Иные вырезы",
						detail: "(итоговая цена будет известна после фактических замеров)",
						prise: 0,
					},
				],
			},
		},
		services: {
			stand: {
				heading: "Выберите нужные вам услуги",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				plusTotal: true,
				inputs: [
					{
						value: "stand",
						text: "Подставка под горячее",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
			installHob: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				plusTotal: true,
				inputs: [
					{
						value: "installHob",
						text: "Монтаж варочной панели",
						detail: "(от 4 000 ₽)",
						prise: 4000,
					},
				],
			},
			wallPanel: {
				heading: "",
				required: false,
				type: "checkbox",
				optionsClass: "subInputs",
				subInputs: {
					text: "Стеновые панели из камня",
					detail: "(от 5 000 ₽)",
					value: "wallPanel",
					depiction: "Стеновые панели из камня",
					inputNumber: [
						{
							value: "weight",
							text: "Общая длина",
							detail: "",
							textInput: " см",
							prise: 5000,
						},
						{
							value: "height",
							text: "Средняя высота",
							detail: "",
							textInput: " см",
							prise: 0,
						},
						{
							value: "number",
							text: "Количество розеток",
							detail: "(от 1 500 ₽)",
							textInput: " ",
							prise: 1500,
						},
					],
				},
			},
			dimension: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				inputs: [
					{
						value: "dimension",
						text: "Замер",
						detail: "(бесплатно)",
						prise: 0,
					},
				],
			},
			delivery: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				plusTotal: true,
				inputs: [
					{
						value: "delivery",
						text: "Доставка",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
			mounting: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "subInputs",
				plusTotal: true,
				inputs: [
					{
						value: "mounting",
						text: "Установка",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
		},
	},
	windowsill: {
		form: {
			form: {
				heading: "Выберите подходящую форму подоконника *",
				required: true,
				type: "radio",
				inputsImg: [
					{
						value: "formNorm",
						text: "Прямой",
						img: "form-norm.svg",
					},
					{
						value: "formG",
						text: "Г-образный",
						img: "form-g.svg",
					},
				],
			},
		},
		materials: {
			crutchDisabled: {
				required: true,
				optionsClass: "crutchDisabled",
			},
		},
		parameters: {
			chamferFront: {
				heading: "Выберите подходящее форму скругления края подоконника",
				required: false,
				type: "radio",
				plusTotal: true,
				depiction: "Cкругления края подоконника",
				inputsImg: [
					{
						value: "a",
						text: "Простой",
						img: "chamfer-01.svg",
						detail: "(2 000 ₽ за 1м)",
						prise: 2000,
					},
					{
						value: "b",
						text: "Сложный",
						img: "chamfer-03.svg",
						detail: "(2 300 ₽ за 1м)",
						prise: 2300,
					},
					{
						value: "c",
						text: "Сборный",
						img: "chamfer-08.svg",
						detail: "(2 600 ₽ за 1м)",
						prise: 2600,
					},
				],
			},
			crutchDisabled: {
				required: true,
				optionsClass: "crutchDisabled",
			},
		},
		notch: {
			notchOther: {
				heading: "Выберите нужные вам вырезы",
				required: true,
				type: "checkbox",
				optionsClass: "subInputs",
				depiction: "",
				inputs: [
					{
						value: "other",
						text: "Иные вырезы",
						detail: "(итоговая цена будет известна после фактических замеров)",
						prise: 0,
					},
				],
			},
		},
		services: {
			mounting: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				plusTotal: true,
				inputs: [
					{
						value: "mounting",
						text: "Установка",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
			dimension: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				inputs: [
					{
						value: "dimension",
						text: "Замер",
						detail: "(бесплатно)",
						prise: 0,
					},
				],
			},
			delivery: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				plusTotal: true,
				inputs: [
					{
						value: "delivery",
						text: "Доставка",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
		},
	},
	stage: {
		form: {
			form: {
				heading: "Выберите подходящую форму ступеней *",
				required: true,
				type: "radio",
				inputsImg: [
					{
						value: "formNorm",
						text: "Прямой",
						img: "form-norm.svg",
					},
				],
			},
		},
		materials: {
			crutchDisabled: {
				required: true,
				optionsClass: "crutchDisabled",
			},
		},
		parameters: {
			chamferFront: {
				heading: "Выберите подходящее форму скругления края ступеней",
				required: false,
				type: "radio",
				plusTotal: true,
				depiction: "Cкругления края ступеней",
				inputsImg: [
					{
						value: "a",
						text: "Простой",
						img: "chamfer-01.svg",
						detail: "(2 000 ₽ за 1м)",
						prise: 2000,
					},
					{
						value: "b",
						text: "Сложный",
						img: "chamfer-03.svg",
						detail: "(2 300 ₽ за 1м)",
						prise: 2300,
					},
					{
						value: "c",
						text: "Сборный",
						img: "chamfer-08.svg",
						detail: "(2 600 ₽ за 1м)",
						prise: 2600,
					},
				],
			},
			crutchDisabled: {
				required: true,
				optionsClass: "crutchDisabled",
			},
		},
		notch: {
			notchOther: {
				heading: "Выберите нужные вам вырезы",
				required: true,
				type: "checkbox",
				optionsClass: "subInputs",
				depiction: "",
				inputs: [
					{
						value: "other",
						text: "Иные вырезы",
						detail: "(итоговая цена будет известна после фактических замеров)",
						prise: 0,
					},
				],
			},
		},
		services: {
			mounting: {
				heading: "Выберите нужные вам услуги",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				plusTotal: true,
				inputs: [
					{
						value: "mounting",
						text: "Установка",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
			dimension: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				inputs: [
					{
						value: "dimension",
						text: "Замер",
						detail: "(бесплатно)",
						prise: 0,
					},
				],
			},
			delivery: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				plusTotal: true,
				inputs: [
					{
						value: "delivery",
						text: "Доставка",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
		},
	},
};

const defaultState = {
	selectOptions: {
		category: "table",
		materials: {
			id: "",
			height: [],
			chooseHeight: {
				price: 0,
			},
		},
	},
};

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		roadMap: {
			category: {
				text: "Категория",
				visible: true,
				disabled: false,
				disabledButton: true,
			},
			form: {
				text: "Форма",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			materials: {
				text: "Материалы",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			parameters: {
				text: "Параметры",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			notch: {
				text: "Вырезы",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			services: {
				text: "Доп. услуги",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			total: {
				text: "Итог",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
		},
		selectOptions: {
			category: "table",
			materials: {
				id: "",
				height: [],
				chooseHeight: {
					price: 0,
				},
			},
		},
		plusTotalOptions: [],
		calc: {
			plusTotal: {
				options: 0,
				array: 0,
				rounding: 0,
				notchMixer: 0,
				wallPanel: 0,
			},
			total: 0,
		},
		subInputsDisabledList: {},
		optionsSize: {
			visible: {
				formNorm: false,
				formG: false,
				formP: false,
			},
			roundingNumber: 0,
			roundingActive: false,
			rounding: {
				topLeft: false,
				topRight: false,
				bottomRight: false,
				bottomLeft: false,
				bottomCenterRight: false,
				bottomCenterLeft: false,
				centerLeft: false,
			},
			size: {
				formNorm: {
					bottom: 0,
					left: 0,
					area: 0,
				},
				formG: {
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					area: 0,
				},
				formP: {
					top: 0,
					right: 0,
					left: 0,
					bottomRight: 0,
					bottomLeft: 0,
					center: 0,
					area: 0,
				},
			},
		},
	},
	mutations: {
		roadMapTo(state, index) {
			// Переключения вкладок с опциями
			const roadMapArrae = Object.keys(state.roadMap);
			if (index >= 0 && index <= roadMapArrae.length - 1) {
				for (const key in state.roadMap) state.roadMap[key].visible = false;
				state.roadMap[roadMapArrae[index]].visible = true;
				state.roadMap[roadMapArrae[index]].disabled = false;
			}
		},
		nextButtonDisabled(state, key) {
			// Убирает disabled у следующей вкладки eсли заполнены обязательные поля
			if (state.roadMap[key].disabledButton) state.roadMap[key].disabledButton = false;
		},
		chooseOption(state, payload) {
			// Добавляет/удаляет выбранную опцию в state.selectOptions
			let underOptions = { value: payload.value, text: payload.text, depiction: payload.depiction, prise: payload.prise === undefined ? false : payload.prise };
			if (payload.typeInput === "checkbox") {
				if (payload.checked) {
					Vue.set(state.selectOptions[payload.key], payload.value, underOptions);
				} else {
					Vue.delete(state.selectOptions[payload.key], payload.value);
				}
			} else if (payload.typeInput === "number") {
				underOptions.value = payload.valueInput;
				Vue.set(state.selectOptions[payload.key], payload.value, underOptions);
			} else {
				state.selectOptions[payload.key].value = underOptions.value;
				state.selectOptions[payload.key].prise = underOptions.prise;
				state.selectOptions[payload.key].text = underOptions.text;
				state.selectOptions[payload.key].depiction = underOptions.depiction;
			}
		},
		defaultOptions(state, payload) {
			let underOptions = { value: "", prise: 0, text: "", depiction: "" };
			if (payload.categoryOptions[payload.optionsKey].type === "checkbox") underOptions = {};
			Vue.set(state.selectOptions, payload.optionsKey, underOptions);
			if (payload.categoryOptions[payload.optionsKey].subInputs !== undefined) Vue.set(state.subInputsDisabledList, payload.optionsKey, true);
		},
		createSelectOptionsDefault(state) {
			// Сбрасывает все настойки
			for (const key in state.selectOptions) {
				if (!["category", "materials"].includes(key)) Vue.delete(state.selectOptions, key);
			}
			// state.selectOptions.materials
			state.selectOptions.materials.id = "";
			// state.roadMap
			for (const key in state.roadMap) {
				let visible = false;
				if (key === "category") visible = true;
				state.roadMap[key].visible = visible;
				state.roadMap[key].disabled = !visible;
				state.roadMap[key].disabledButton = true;
			}
			// state.plusTotalOptions
			state.plusTotalOptions = [];
			// state.calc
			for (const key in state.calc.plusTotal) state.calc.plusTotal[key] = 0;
			state.calc.plusTotal.total = 0;
			// state.subInputsDisabledList
			for (const key in state.subInputsDisabledList) Vue.delete(state.subInputsDisabledList, key);
			// state.optionsSize
			for (const key in state.optionsSize.visible) state.optionsSize.visible[key] = false;
			state.optionsSize.roundingNumber = 0;
			state.optionsSize.roundingActive = false;
			for (const key in state.optionsSize.rounding) state.optionsSize.rounding[key] = false;
			for (const sizeKey in state.optionsSize.size) {
				for (const key in state.optionsSize.size[sizeKey]) state.optionsSize.size[sizeKey][key] = 0;
			}
		},
		createSelectOptions(state) {
			// Формирует selectOptions из всех имеющихся опций в options
			for (const screenKey in options[state.selectOptions.category]) {
				const categoryOptions = options[state.selectOptions.category][screenKey];
				for (const optionsKey in categoryOptions) {
					this.commit({ type: "defaultOptions", optionsKey, categoryOptions });
					if (categoryOptions[optionsKey].plusTotal) state.plusTotalOptions.push(optionsKey);
				}
			}
		},
		chooseСategory(state, value) {
			//
			state.selectOptions.category = value;
		},
		subInputsDisabled(state, payload) {
			// Убирает и добавляет disabled у subInputs
			if (payload.checked) {
				state.subInputsDisabledList[payload.optionKey] = false;
			} else {
				state.subInputsDisabledList[payload.optionKey] = true;
				this.commit({
					type: "defaultOptions",
					optionsKey: payload.optionKey,
					categoryOptions: options[state.selectOptions.category][payload.windowKey],
				});
			}
		},
		roundingAngle(state, payload) {
			// Выбор угла закругления
			state.optionsSize.rounding[payload.angle] = !state.optionsSize.rounding[payload.angle];
			state.optionsSize.roundingNumber = 0;
			for (const key in state.optionsSize.rounding) {
				if (state.optionsSize.rounding[key]) state.optionsSize.roundingNumber++;
			}
		},
		formSize(state, payload) {
			// Передает размер формы
			state.optionsSize.size[state.selectOptions.form.value][payload.position] = payload.value;
		},
		sizeVisible: (state) => {
			// Скрывает / показывает выбранную форму
			for (const key in state.optionsSize.visible) state.optionsSize.visible[key] = false;
			state.optionsSize.visible[state.selectOptions.form.value] = true;
		},
		chooseMaterial: (state, payload) => {
			// Выбор материала
			state.selectOptions.materials.id = payload.id;
			state.selectOptions.materials.height = payload.height;
			if (state.roadMap.materials.disabledButton) state.roadMap.materials.disabledButton = false;
			if (!state.roadMap.parameters.disabledButton) state.roadMap.parameters.disabledButton = true;
		},
		chooseHeight: (state, input) => {
			// Выбор толщину материала
			state.selectOptions.materials.chooseHeight = input;
			if (state.roadMap.parameters.disabledButton) state.roadMap.parameters.disabledButton = false;
		},
		roundingDefalt: (state) => {
			// Сбрасывает закругления краев формы
			for (const key in state.optionsSize.rounding) state.optionsSize.rounding[key] = false;
			state.optionsSize.roundingNumber = 0;
		},
		calcPlusTotal: (state, payload) => {
			// Подсчитывает общую стоимость всех выбранных опций с plusTotal
			state.calc.plusTotal[payload.key] = payload.total;
		},
		calcTotal: (state, total) => {
			// Подсчитывает предварительную стоимость
			state.calc.total = total;
		},
	},
});
