<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
        <div class="page-slider__wrap">
            <div class="page-slider swiper-container">
              <div class="swiper-wrapper"> 		   
		<?foreach ($arResult['ITEMS'] as $value) {?>	
			   <div class="swiper-slide">
                  <div class="page-slider__img-wrap"><img class="slider-main1__img" src="<?=$value['PREVIEW_PICTURE']['SRC']?>" alt="<?=$value['NAME']?>"><span class="slider-main1__name"><?=$value['NAME']?></span></div>
                </div>
		<?}?>	
              </div>
              <div class="slider-nav">
                <div class="slider-nav__button-wrap">
                  <button class="slider-nav__button-prev page-slider-prev"></button>
                  <button class="slider-nav__button-next page-slider-next"></button>
                </div>
                <div class="slider-nav__pagination page-slider-pagination"></div>
              </div>
            </div>
          </div>