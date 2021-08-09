let materials = [
	{
		type: "cvarc",
		color: "black",
		id: "00",
		name: "Caesarstone 4011 Cloudburst",
		prise: 6200,
		imgName: "kv-01",
	},
	{
		type: "cvarc",
		color: "read",
		id: "01",
		name: "Caesarstone 4011 Cloudburst",
		prise: 6200,
		imgName: "kv-02",
	},
	{
		type: "cvarc",
		color: "yellow",
		id: "02",
		name: "4011 Cloudburst",
		prise: 6200,
		imgName: "kv-03",
	},
	{
		type: "mramor",
		color: "black",
		id: "03",
		name: "Caesarstone 4011 Cloudburst",
		prise: 8400,
		imgName: "mr-01",
	},
	{
		type: "mramor",
		color: "read",
		id: "04",
		name: "Caesarstone 4011 Cloudburst",
		prise: 8400,
		imgName: "mr-02",
	},
	{
		type: "granit",
		color: "black",
		id: "05",
		name: "Caesarstone 4011",
		prise: 12400,
		imgName: "gr-01",
	},
	{
		type: "granit",
		color: "read",
		id: "06",
		name: "Caesarstone 8011 Cloudburst",
		prise: 13100,
		imgName: "gr-02",
	},
	{
		type: "granit",
		color: "yellow",
		id: "07",
		name: " 8011 Cloudburst",
		prise: 12100,
		imgName: "gr-03",
	},
];

let getOptions = {
	table: {
		form: {
			form_norm: {
				type: "radio",
				name: "Прямая",
				imgName: "form-norm",
			},
			form_g: {
				type: "radio",
				name: "Г-образная",
				imgName: "form-g",
			},
			form_p: {
				type: "radio",
				name: "П-образная",
				imgName: "form-p",
			},
		},
		thickness: {
			two: {
				type: "radio",
				name: "2 см",
				detail: "",
				prise: 0,
			},
			three: {
				type: "radio",
				name: "3 см",
				detail: "(3 000 ₽ за 1 м2)",
				prise: 3000,
			},
		},
		rounding: {
			a: {
				type: "radio",
				name: "А",
				detail: "",
				imgName: "rounding-0",
				prise: 0,
			},
			b: {
				type: "radio",
				name: "Б",
				detail: "(2 000 ₽ за 1 уг.)",
				imgName: "rounding-1",
				prise: 2000,
			},
			c: {
				type: "radio",
				name: "В",
				detail: "(4 000 ₽ за 1 уг.)",
				imgName: "rounding-2",
				prise: 4000,
			},
		},
		chamfer_front: {
			a: {
				type: "radio",
				name: "Простой",
				detail: "(2 000 ₽ за 1м)",
				imgName: "chamfer-01",
				prise: 2000,
			},
			b: {
				type: "radio",
				name: "Сложный",
				detail: "(2 300 ₽ за 1м)",
				imgName: "chamfer-03",
				prise: 2300,
			},
			c: {
				type: "radio",
				name: "Сборный",
				detail: "(2 600 ₽ за 1м)",
				imgName: "chamfer-08",
				prise: 2600,
			},
		},
		notch: {
			sink: {
				type: "checkbox",
				name: "Вырез под мойку",
				detail: "(от 3 000 ₽)",
				prise: 0,
				subcategories: {
					up: {
						type: "radio",
						name: "Поверх столешницы",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
					down: {
						type: "radio",
						name: "Снизу столешницы",
						detail: "(от 4 000 ₽)",
						prise: 4000,
					},
				},
			},
			hob: {
				type: "checkbox",
				name: "Вырез под варочную панель",
				detail: "(от 3 000 ₽)",
				prise: 0,
				subcategories: {
					up: {
						type: "radio",
						name: "Поверх столешницы",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
					flush: {
						type: "radio",
						name: "Вровень со столешницей",
						detail: "(от 5 000 ₽)",
						prise: 5000,
					},
				},
			},
			// sink2: {
			// 	type: "checkbox",
			// 	name: "Вырез под мойку",
			// 	detail: "(от 3 000 ₽)",
			// 	prise: 0,
			// 	subcategories: {
			// 		up2: {
			// 			type: "checkbox",
			// 			name: "Поверх столешницы",
			// 			detail: "(от 3 000 ₽)",
			// 			prise: 3000,
			// 		},
			// 		flush2: {
			// 			type: "checkbox",
			// 			name: "Вровень со столешницей",
			// 			detail: "(от 5 000 ₽)",
			// 			prise: 5000,
			// 		},
			// 		down2: {
			// 			type: "checkbox",
			// 			name: "Снизу столешницы",
			// 			detail: "(от 4 000 ₽)",
			// 			prise: 4000,
			// 		},
			// 	},
			// },
			faucet: {
				type: "checkbox",
				name: "Вырез под смеситель",
				detail: "(от 1 000 ₽)",
				prise: 1000,
				subcategories: {
					up: {
						type: "radio",
						name: "До 30 мм",
						prise: 0,
					},
					flush: {
						type: "radio",
						name: "От 30 до 65 мм",
						prise: 0,
					},
					down: {
						type: "radio",
						name: "Свыше 65 мм",
						prise: 0,
					},
				},
			},
			other: {
				type: "checkbox",
				name: "Иные вырезы",
				detail: "(итоговая цена будет известна после фактических замеров)",
				prise: 0,
			},
		},
		secondary: {
			stand: {
				type: "checkbox",
				name: "Подставка под горячее",
				detail: "(от 3 000 ₽)",
				prise: 0,
			},
			install_hob: {
				type: "checkbox",
				name: "Монтаж варочной панели",
				detail: "(от 4 000 ₽)",
				prise: 4000,
			},
			// wall: {
			// 	type: "checkbox",
			// 	name: "Стеновые панели из камня",
			// 	detail: "(от 1 000 ₽)",
			// 	prise: 1000,
			// },
		},
		installation_services: {
			dimension: {
				type: "checkbox",
				name: "Замер",
				detail: "(бесплатно)",
				prise: 0,
			},
			delivery: {
				type: "checkbox",
				name: "Доставка",
				detail: "(от 3 000 ₽)",
				prise: 3000,
			},
			install: {
				type: "checkbox",
				name: "Установка",
				detail: "(от 3 000 ₽)",
				prise: 3000,
			},
		},
	},
};

let selectedOptions = {
	category: "table",
	form: "",
	formArea: "",
	formEdgeSize: {},
	materials: "",
	sizeRadius: 0,
	secondaryOptions: {},
};

function textM2(text) {
	// Оборачивает в span class="m2" для отображения в квадрате или в кубе
	text = text.replace(/м\d/gi, (a1) => {
		return `<span class="m2">${a1}</span>`;
	});
	return text;
}

function listShowItem(items, idItem, display = "block") {
	// Показывает нужный элемент остальные скрывает
	for (const blockItem of items) {
		blockItem.style.display = "none";
	}
	document.querySelector("#" + idItem).style.display = display;

	// Скрывает блок с размерами при переходи на вкладку 'Итог'
	const activeSize = document.querySelector(".options__size-wrap");
	if (idItem == "total") {
		activeSize.style.display = "none";
	} else {
		activeSize.style.display = "block";
	}
}

function calcTab(button, block, data_attribute) {
	//Табы для калькулятора черуз dataAttribute
	for (const buttonItem of button) {
		const buttonData = buttonItem.getAttribute(data_attribute);
		buttonItem.addEventListener("click", () => {
			listShowItem(block, buttonData);
		});
	}
}

function calcNextButton(buttons, roadMapButton) {
	function removeDisable(roadMapButton, ntxtPoint) {
		// Уберает disabled у кнопок навигации (roadMapButton)
		for (const roadMapButtonItem of roadMapButton) {
			if (roadMapButtonItem.dataset.calcTab == ntxtPoint) {
				roadMapButtonItem.removeAttribute("disabled");
			}
		}
	}

	for (const buttonItem of buttons) {
		const ntxtPoint = buttonItem.dataset.calcNextButton;

		buttonItem.addEventListener("click", () => {
			removeDisable(roadMapButton, ntxtPoint);
			listShowItem(calcBody, ntxtPoint);
		});
	}
}

function calcPreviousButton(buttons) {
	for (const buttonItem of buttons) {
		const previousPoint = buttonItem.dataset.calcPreviousButton;
		buttonItem.addEventListener("click", () => {
			listShowItem(calcBody, previousPoint);
		});
	}
}

function choiceForm(input, block, display) {
	// Выбор формы (столешнице, подоконника, ступеней)
	for (const inputItem of input) {
		inputItem.addEventListener("change", () => {
			listShowItem(block, inputItem.value, display);
			selectedOptions.form = inputItem.value;
			inputFormSize();
			areatext = document.querySelector(`#${selectedOptions.form} [data-size-area]`);
		});
	}
}

// Рендер опций
function detail(str) {
	if (str && str !== "") {
		return ` <span class="options__radio-text-gray">${textM2(str)}</span>`;
	} else {
		return "";
	}
}

const htmlOptionRadioImg = function (itemParent, itemObject, itemName, type = "radio") {
	// Html для radio form
	return `
		<div class="options-input">
			<input id="options_${itemParent + "_" + itemName}" type="${type}" name="${itemParent}" value="${itemName}">
			<label for="options_${itemParent + "_" + itemName}" tabindex="1">				
				<div class="options-input__body">
					<div class="options-input__radio-chec"></div>
					<img class="options-input__img" src="./assets/images/calc-svg/${itemObject.imgName}.svg" alt="${itemObject.name}">
				</div>
				<span class="options-input__name">${itemObject.name + detail(itemObject.detail)}</span>
			</label>
		</div>
	`;
};

const htmlOptionInput = function (itemParent, itemObject, itemName, type = "radio") {
	// Html для обычных radio
	const subcategoriesCheck = itemObject.subcategories && itemObject.subcategories !== "";

	function dataSubcategories() {
		// Добавляет data атрибут если itemObject.subcategories
		if (subcategoriesCheck) {
			return ` data-subcategories = "${itemName}"`;
		} else {
			return "";
		}
	}

	function subcategories() {
		// Добавляет подкатегории если itemObject.subcategories
		if (subcategoriesCheck) {
			let subcategoriesItem = "";
			for (const subcategoriesItemKey in itemObject.subcategories) {
				subcategoriesItem += `
				<label class="custom-input">
					<input type="${itemObject.subcategories[subcategoriesItemKey].type}" name="${itemName}" value="${subcategoriesItemKey}">
					<div class="options-input__radio-chec"></div>
					<span>${itemObject.subcategories[subcategoriesItemKey].name + detail(itemObject.subcategories[subcategoriesItemKey].detail)}</span>
				</label>
				`;
			}
			return `
			<div id="${itemName}" class="subcategories-input__wrap">
				${subcategoriesItem}
			</div>
		`;
		} else {
			return "";
		}
	}

	return `
		<label class="custom-input">
			<input type="${type}" name="${itemParent}" value="${itemName}" ${dataSubcategories()}>
			<div class="options-input__radio-chec"></div>
			<span>${itemObject.name + detail(itemObject.detail)}</span>
		</label>
		${subcategories()}
	`;
};

function renderOptions() {
	// Рендерит опции из getOptions
	const optionPage = getOptions[selectedOptions.category];

	for (const optionPageKey in optionPage) {
		const optionWrap = document.querySelector(`[data-render-options="${optionPageKey}"]`);
		if (optionWrap) {
			optionWrap.innerHTML = "";
			for (const optionListKey in optionPage[optionPageKey]) {
				let funcHtml = htmlOptionInput,
					type;
				if (optionPage[optionPageKey][optionListKey].imgName && optionPage[optionPageKey][optionListKey].imgName !== "") {
					funcHtml = htmlOptionRadioImg;
				}
				if (optionPage[optionPageKey][optionListKey].type && optionPage[optionPageKey][optionListKey].type !== "") {
					type = optionPage[optionPageKey][optionListKey].type;
				}
				optionWrap.insertAdjacentHTML("beforeend", funcHtml(optionPageKey, optionPage[optionPageKey][optionListKey], optionListKey, type));
			}
		}
	}
}

// // Рендер
renderOptions();

// Выберите разновидность и цвет камня
const filterSelect = document.querySelectorAll("select[data-calc-filter]"),
	materialsWrap = document.querySelector(".options__materials-wrap");
let filterArray;

// // Фильтры
function filterMaterials() {
	// Фильтрует Материалы в зависимости от занчений select[data-calc-filter]
	filterArray = materials;
	for (const filter of filterSelect) {
		if (filter.value != "all") {
			filterArray = filterArray.filter((item) => item[filter.dataset.calcFilter] === filter.value);
		}
	}
}

function renderMaterial() {
	// Рендер карточик материалов
	materialsWrap.innerHTML = "";
	for (const material of filterArray) {
		const cardHtml = `
		<div class="options__materials">
			<input id="radio-materials-${material.id}" type="radio" name="material" value="${material.id}">
			<label for="radio-materials-${material.id}">
				<img class="options__materials-img" src="./assets/images/material/${material.type}/${material.imgName}.png" alt="${material.name}">
				<span class="options__materials-name">${material.name}</span>
				<span class="options__materials-price">${material.prise} ₽ за <span class="m2">м2</span></span>
			</label>
        </div>
		`;
		materialsWrap.insertAdjacentHTML("beforeend", cardHtml);
	}
}

for (const filterS of filterSelect) {
	filterS.addEventListener("change", () => {
		filterMaterials();
		renderMaterial();
		materialInputСhoice();
	});
}

filterMaterials();
renderMaterial();
materialInputСhoice();

// Выберите разновидность и цвет камня
function materialInputСhoice() {
	const materialInputLost = document.querySelectorAll('[name="material"]');
	for (const materialInput of materialInputLost) {
		materialInput.addEventListener("change", (event) => {
			selectedOptions.materials = materials.filter((item) => item.id === event.target.value)[0];
		});
	}
}

// Рендер площади
let areatext;
function renderArea() {
	if (typeof selectedOptions.formArea === "number" && filledInput(selectedOptions.formEdgeSize)) {
		areatext.innerHTML = (selectedOptions.formArea / 10000).toFixed(2) + " ";
	}
}

// Добавляет выбранные опции в selectedOptions
function addOptions() {
	function addEventInput(key, element, inputs) {
		for (const inputItem of inputs) {
			selectedOptions.secondaryOptions[key] = {};
			inputItem.addEventListener("change", (event) => {
				console.log("1");
				if (inputItem.type === "radio") {
					selectedOptions.secondaryOptions[key] = {};
				}
				if (event.target.checked) {
					selectedOptions.secondaryOptions[key][event.target.value] = element[event.target.value];
				} else {
					delete selectedOptions.secondaryOptions[key][event.target.value];
				}
			});
		}
	}

	let subcategories = {};

	for (const key in getOptions[selectedOptions.category]) {
		const element = getOptions[selectedOptions.category][key],
			inputs = document.querySelectorAll(`[name="${key}"]`);

		for (const inputItem of inputs) {
			if (element[inputItem.value].subcategories) {
				subcategories[inputItem.value] = element[inputItem.value].subcategories;
			}
		}

		if (key !== "form") {
			addEventInput(key, element, inputs);
		}
	}

	for (const keyS in subcategories) {
		const elementS = subcategories[keyS],
			inputsS = document.querySelectorAll(`[name="${keyS}"]`);
		addEventInput(keyS, elementS, inputsS);
	}
}

addOptions();

// Переключает вкладки настроек калькулятора
const roadMapButton = document.querySelectorAll("button[data-calc-tab]"),
	calcBody = document.querySelectorAll(".calc__body");
calcTab(roadMapButton, calcBody, "data-calc-tab");

// Кнопки назад далее
const listCalcNextButton = document.querySelectorAll("button[data-calc-next-button]"),
	listCalcPreviousButton = document.querySelectorAll("button[data-calc-previous-button]");
calcNextButton(listCalcNextButton, roadMapButton);
calcPreviousButton(listCalcPreviousButton, roadMapButton);

for (const button of listCalcNextButton) {
	const radios = document.querySelectorAll(`[name="${button.dataset.radioRequired}"]`);
	for (const radio of radios) {
		radio.addEventListener("change", () => {
			button.removeAttribute("disabled");
		});
	}
}

// Выберите подходящую форму
const radioForm = document.querySelectorAll('input[name="form"]'),
	blockForm = document.querySelectorAll(".options__size");
choiceForm(radioForm, blockForm);

// //  Убирает скруглённые углов при переключении формы
for (const radio of radioForm) {
	radio.addEventListener("change", () => {
		for (const button of sizeRadiusButton) {
			button.checked = false;
			let event = new Event("change");
			button.dispatchEvent(event);
		}
		selectedOptions.sizeRadius = 0;
		roundingNumberText.innerHTML = selectedOptions.sizeRadius;
	});
}

// Количество углов
const radioRounding = document.querySelectorAll('input[name="rounding"]'),
	sizeRadiusButton = document.querySelectorAll("[data-size-radius]"),
	rootStyles = document.querySelector(":root"),
	roundingNumberText = document.querySelector("#rounding-number-text");
let firstRounding = true;

function warningsFillets() {
	text = '<span class="form-error warnings-fillets">Выберите углы скругления</span>';
	document.querySelector(`#${selectedOptions.form}`).insertAdjacentHTML("beforeend", text);
}

for (const radio of radioRounding) {
	radio.addEventListener("change", (event) => {
		let disp,
			rounding,
			sizeRadius = selectedOptions.sizeRadius,
			warnings = document.querySelector(".warnings-fillets");
		if (warnings) {
			warnings.remove();
		}
		if (event.target.value === "a") {
			(disp = "none"), (rounding = 2), (sizeRadius = 0);
		}
		if (event.target.value === "b") {
			(disp = "block"), (rounding = 20);
		}
		if (event.target.value === "c") {
			(disp = "block"), (rounding = 40);
		}
		if (firstRounding && event.target.value !== "a") {
			for (const button of sizeRadiusButton) {
				button.classList.add("size-img-button_animat");
			}
			warningsFillets();
		}
		for (const button of sizeRadiusButton) {
			button.style.display = disp;
		}
		rootStyles.style.setProperty("--form-rounding", rounding + "px");
		roundingNumberText.innerHTML = sizeRadius;
	});
}

// Скругление углов
for (const button of sizeRadiusButton) {
	button.addEventListener("change", (event) => {
		let warnings = document.querySelector(".warnings-fillets");
		if (firstRounding && event.target.checked) {
			for (const button of sizeRadiusButton) {
				button.classList.remove("size-img-button_animat");
				firstRounding = false;
			}
			warnings.remove();
		}
		if (event.target.checked) {
			button.parentElement.style[event.target.dataset.sizeRadius] = "";
			selectedOptions.sizeRadius += 1;
		} else {
			button.parentElement.style[event.target.dataset.sizeRadius] = "2px";
			selectedOptions.sizeRadius -= 1;
		}
		roundingNumberText.innerHTML = selectedOptions.sizeRadius;
	});
}

// Доп опции в чекбоксе
const moreInput = document.querySelectorAll("[data-subcategories]");

function onOffMoreInput(data, boolean) {
	const wrap = document.querySelector("#" + data),
		items = wrap.querySelectorAll("input");
	let styleOpacity = "0.3";
	if (boolean) {
		styleOpacity = "1";
		for (const i of items) {
			i.removeAttribute("disabled");
		}
	} else {
		for (const i of items) {
			i.setAttribute("disabled", "");
			i.checked = false;
			let event = new Event("change");
			i.dispatchEvent(event);
		}
	}
	wrap.style.opacity = styleOpacity;
}

for (const inputItem of moreInput) {
	const inputData = inputItem.dataset.subcategories;
	onOffMoreInput(inputData, false);
	inputItem.addEventListener("change", (event) => {
		onOffMoreInput(inputData, event.target.checked);
	});
}

// Расчет площади
let errorHtmlText = "Не может быть меньше размера", // Текст ошибки
	errorHtmlClass = "options__size-error", // Класс ошибки
	errorInputClass = "options__size-min-error", // Класс ошибки инпута с большим значением
	errorHtml = `<span class="form-error ${errorHtmlClass}">${errorHtmlText}</span>`,
	errorOn = false;

function errorInput(object) {
	// Вводит ошибку если значение внесено некорректно
	function removeError() {
		// Удаляет старые ошибки
		for (const i of document.querySelectorAll(`#${selectedOptions.form} .${errorHtmlClass}`)) {
			i.remove();
		}
		for (const i of document.querySelectorAll(`#${selectedOptions.form} .${errorInputClass}`)) {
			i.classList.remove(errorInputClass);
		}
		errorOn = false;
	}
	if (!Number.isInteger(object)) {
		let inputError = document.querySelector(`#${selectedOptions.form} [data-form-size = "${object.maxInput}"]`).parentNode,
			inputMinError = [];

		for (const min of object.minInput) {
			inputMinError.push(document.querySelector(`#${selectedOptions.form} [data-form-size = "${min}"]`));
		}

		if (errorOn) {
			removeError();
		}

		inputError.insertAdjacentHTML("beforeend", errorHtml);
		for (const minError of inputMinError) {
			minError.classList.add(errorInputClass);
		}
		errorOn = true;
	}

	if (Number.isInteger(object) && errorOn) {
		removeError();
	}
}

function filledInput(object) {
	// Возвращает ошибку только если все поля заполнены
	const objectLength = Object.keys(object).length;
	let step = 0;
	for (const key in object) {
		step++;
		if (object[key] == 0) {
			return false;
		} else if (objectLength == step) {
			return true;
		}
	}
}

function calcArea(object) {
	function generateError(maxInput, minInput) {
		return { maxInput, minInput };
	}

	// Расчет площади Прямая
	if (selectedOptions.form === "form_norm") {
		const area = object["bot"] * object["left"];
		return area;
	}
	// Расчет площади Г-образная
	if (selectedOptions.form === "form_g") {
		if (object["top"] <= object["bot-right"] && filledInput(object)) {
			return generateError("top", ["bot-right"]);
		}
		if (object["right"] <= object["left-top"] && filledInput(object)) {
			return generateError("right", ["left-top"]);
		}
		const area_main = object["top"] * object["right"],
			area_minus = (object["top"] - object["bot-right"]) * (object["right"] - object["left-top"]);
		return area_main - area_minus;
	}
	// Расчет площади П-образная
	if (selectedOptions.form === "form_p") {
		if (object["left"] <= object["body"] && filledInput(object)) {
			return generateError("left", ["body"]);
		}
		if (object["right"] <= object["body"] && filledInput(object)) {
			return generateError("right", ["body"]);
		}
		if (object["top"] <= object["bot-left"] + object["bot-right"] && filledInput(object)) {
			return generateError("top", ["bot-left", "bot-right"]);
		}
		const area_left = object["left"] * object["bot-left"],
			area_right = object["right"] * object["bot-right"],
			area_body = (object["top"] - (object["bot-left"] + object["bot-right"])) * object["body"];
		return area_left + area_right + area_body;
	}
}

// расчет площади
function inputFormSize() {
	const inputActive = document.querySelectorAll(`#${selectedOptions.form} [data-form-size]`);
	selectedOptions.formEdgeSize = {};
	for (const inputItem of inputActive) {
		selectedOptions.formEdgeSize[inputItem.dataset.formSize] = Number(inputItem.value);
		inputItem.addEventListener("change", (event) => {
			selectedOptions.formEdgeSize[event.target.dataset.formSize] = Number(event.target.value);
			selectedOptions.formArea = calcArea(selectedOptions.formEdgeSize);
			errorInput(selectedOptions.formArea);
			renderArea();
			console.log(selectedOptions.formArea);
		});
	}
}

// for (const inputItem of inputSize) {
// 	// Минимальное значение для инпута, указывается в min=""
// 	inputItem.addEventListener("change", () => {
// 		if (inputItem.min > inputItem.value) {
// 			inputItem.value = inputItem.min;
// 		}
// 	});
// }
