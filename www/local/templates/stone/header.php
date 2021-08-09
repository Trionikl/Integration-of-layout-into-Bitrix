<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
	IncludeTemplateLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/templates/".SITE_TEMPLATE_ID."/header.php");
	CJSCore::Init(array("fx"));
	
	//\Bitrix\Main\UI\Extension::load("ui.bootstrap4");
	
	if (isset($_GET["theme"]) && in_array($_GET["theme"], array("blue", "green", "yellow", "red")))
	{
		COption::SetOptionString("main", "wizard_eshop_bootstrap_theme_id", $_GET["theme"], false, SITE_ID);
	}
	$theme = COption::GetOptionString("main", "wizard_eshop_bootstrap_theme_id", "green", SITE_ID);
	
	$curPage = $APPLICATION->GetCurPage(true);
	
?><!DOCTYPE html>
<html xml:lang="<?=LANGUAGE_ID?>" lang="<?=LANGUAGE_ID?>">
	<head>
		<title><?$APPLICATION->ShowTitle()?></title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width">
		<link rel="shortcut icon" type="image/x-icon" href="<?=SITE_DIR?>favicon.ico" />
		<?	// D7
			use Bitrix\Main\Page\Asset;
		?>
		<?php CJSCore::Init(array("jquery2"));?>
		<!-- стили -->
		<?php Asset::getInstance()->addCss('/local/templates/stone/styles/app.css') ?>
		<?php Asset::getInstance()->addCss('/local/templates/stone/styles/lightgallery.min.css') ?>
		<?php Asset::getInstance()->addCss('/local/templates/stone/styles/swiper-bundle.min.css') ?>
		<!-- скрипты		 -->
		<?php Asset::getInstance()->addJs('/local/templates/stone/scripts/imask.min.js') ?>
		<?php Asset::getInstance()->addJs('/local/templates/stone/scripts/lightgallery.min.js') ?>
		<?php Asset::getInstance()->addJs('/local/templates/stone/scripts/main.js') ?>
		<?php Asset::getInstance()->addJs('/local/templates/stone/scripts/medium-zoom.min.js') ?>
		<?php Asset::getInstance()->addJs('/local/templates/stone/scripts/swiper-bundle.min.js') ?>
		
		<? $APPLICATION->ShowHead(); ?>
	</head>	
	
	<body>
		<div id="panel"><? $APPLICATION->ShowPanel(); ?></div>	
		<div>
			<header class="header__wrap">				
				<div class="header"><a href="#">
					<svg class="header__logo header__logo_ver" width="142" height="70">
						<use xlink:href="/local/templates/stone/images/sprite.svg#logo_ver-g"></use>
					</svg>
					<svg class="header__logo header__logo_norm" width="142" height="70">
						<use xlink:href="/local/templates/stone/images/sprite.svg#logo"></use>
					</svg></a>
					<button class="header__kontacts-button" data-drop-kontacts-button="">Адреса</button>
					<div class="header__body">			
						<?$APPLICATION->IncludeComponent(
							"bitrix:menu",
							"top_menu",
							array(
							"ROOT_MENU_TYPE" => "top",
							"MENU_CACHE_TYPE" => "A",
							"MENU_CACHE_TIME" => "36000000",
							"MENU_CACHE_USE_GROUPS" => "Y",
							"MENU_THEME" => "site",
							"CACHE_SELECTED_ITEMS" => "N",
							"MENU_CACHE_GET_VARS" => array(),
							"MAX_LEVEL" => "2",
							"CHILD_MENU_TYPE" => "top_sub_2",
							"USE_EXT" => "Y",
							"DELAY" => "N",
							"ALLOW_MULTI_SELECT" => "N",
							"COMPONENT_TEMPLATE" => "top_menu"
							),
							false
						);?>
						
					</div>
				</div>				
			</header>
			<main>
				<!-- крошки, хлебные -->	  
				<?$APPLICATION->IncludeComponent(
					"bitrix:breadcrumb",
					"universal",
					array(
					"START_FROM" => "0",
					"PATH" => "",
					"SITE_ID" => "-"
					),
					false,
					Array('HIDE_ICONS' => 'Y')
				);?>  
				<!-- end крошки -->	  
			<div class="workarea">							