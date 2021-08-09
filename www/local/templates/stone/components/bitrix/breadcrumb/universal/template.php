<?php
	if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
	
	/**
		* @global CMain $APPLICATION
		*/
	
	global $APPLICATION;
	
	//delayed function must return a string
	if(empty($arResult))
	return "";
	
	$strReturn = '';
	
	//we can't use $APPLICATION->SetAdditionalCSS() here because we are inside the buffered function GetNavChain()
	$css = $APPLICATION->GetCSSArray();
	if(!is_array($css) || !in_array("/bitrix/css/main/font-awesome.css", $css))
	{
		//$strReturn .= '<link href="'.CUtil::GetAdditionalFileURL("/bitrix/css/main/font-awesome.css").'" type="text/css" rel="stylesheet" />'."\n";
	}
	
	//$strReturn .= '<div class="bx-breadcrumb background-wrap" itemprop="http://schema.org/breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">';

$strReturn .= '<div class="background-wrap"> 	<nav class="bread-crumbs__wrap"> 		<ul class="bread-crumbs">';

				$itemSize = count($arResult);
				for($index = 0; $index < $itemSize; $index++)
				{
					$title = htmlspecialcharsex($arResult[$index]["TITLE"]);
					$arrow = ($index > 0? '' : '');
					
					if($arResult[$index]["LINK"] <> "" && $index != $itemSize-1)
					{
						$strReturn .=  $arrow.'
						<li class="bx-breadcrumb-item bread-crumbs__item" id="bx_breadcrumb_'.$index.'" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
						<a class="bx-breadcrumb-item-link bread-crumbs__linc" href="'.$arResult[$index]["LINK"].'" title="'.$title.'" itemprop="item">
						<span class="bx-breadcrumb-item-text" itemprop="name">'.$title.'</span>
						</a>
						<meta itemprop="position" content="'.($index + 1).'" />
						</li>';
					}
					else
					{
						$strReturn .= $arrow.'
						<li class="bx-breadcrumb-item bread-crumbs__item">
						<span class="bx-breadcrumb-item-text bread-crumbs__linc">'.$title.'</span>
						</li>';
					}
				}
$strReturn .= '		</ul> 	</nav> </div>';

	//$strReturn .= '</div>';
	
	return $strReturn;