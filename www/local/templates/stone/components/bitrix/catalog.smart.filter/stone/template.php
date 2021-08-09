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
	
	$templateData = array(
	'TEMPLATE_THEME' => $this->GetFolder().'/themes/'.$arParams['TEMPLATE_THEME'].'/colors.css',
	'TEMPLATE_CLASS' => 'bx-'.$arParams['TEMPLATE_THEME']
	);
	
	if (isset($templateData['TEMPLATE_THEME']))
	{
		$this->addExternalCss($templateData['TEMPLATE_THEME']);
	}
	$this->addExternalCss("/bitrix/css/main/bootstrap.css");
	$this->addExternalCss("/bitrix/css/main/font-awesome.css");
?>
<script src="/local/templates/stone/components/bitrix/catalog.smart.filter/stone/conversion_other.js"></script>
<?// echo "<pre>"; print_r($arResult["ITEMS"]); echo "</pre>";?>

	<form class="form-filter" name="<?echo $arResult["FILTER_NAME"]."_form"?>" action="<?echo $arResult["FORM_ACTION"]?>" method="get" class="smartfilter">
<div class="catalog__filter">		
		<div class="input_prise-wrap">
			
			<?foreach($arResult["ITEMS"] as $key=>$arItem)//prices
				{
					$key = $arItem["ENCODED_ID"];
					if(isset($arItem["PRICE"])):
					if ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0)
					continue;
				?>
				
				<label class="input_prise-min"> <span class="m2">Цена м2 от</span>
					<input
					class="min-price"
					type="text"		
					id="<?echo $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>"
					value="<?echo $arItem["VALUES"]["MIN"]["HTML_VALUE"]?>"
					size="5"
					onkeyup="smartFilter.keyup(this)"
					/>					
					<input type="hidden" class="min-hidden" name="<?echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"]?>" value="<?echo $arItem["VALUES"]["MIN"]["HTML_VALUE"]?>">
					
				</label>
				<label class="input_prise-max"> <span>до</span>
					<input
					class="max-price"
					type="text"				
					id="<?echo $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>"
					value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>"
					size="5"
					onkeyup="smartFilter.keyup(this)"
					/>
					<input type="hidden" class="max-hidden" name="<?echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"]?>" value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>">
					
				</label>
				
				<?				
					endif;
					
					if ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0) {
						$arResultItem[]=$arItem;
					}
				}
			?>
		</div>
		<?
			//echo "<pre>"; print_r($arResultItem); echo "</pre>";
		?>
		<select id="myselect_1" class="input input_select">			  
			<?	
				
				//echo "<pre>"; print_r($arResultItem); echo "</pre>";
				foreach ($arResultItem as $val => $arIt):				
				//echo "<pre>"; print_r($arIt[VALUES]); echo "</pre>";
				foreach ($arIt[VALUES] as $valIt => $ar):
				$class = "";
				if ($ar["CHECKED"])
				$class.= " selected";
				if ($ar["DISABLED"])
				$class.= " disabled";
			?>
			<option>
				<label for="<?=$ar["CONTROL_ID"]?>" class="bx-filter-param-label<?=$class?>" data-role="label_<?=$ar["CONTROL_ID"]?>" onclick="smartFilter.selectDropDownItem(this, '<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')"><?=$ar["VALUE"]?></label>
			</option>	
			<?endforeach?>
			<?endforeach?>				
		</select>		
							<input type="hidden" class="select-hidden-1" name="arrFilter_3" value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>">

		
		<select id="myselect_2" class="input input_select">			  
			<?	
				
				//echo "<pre>"; print_r($arResultItem); echo "</pre>";
				foreach ($arResultItem as $val => $arIt):				
				//echo "<pre>"; print_r($arIt[VALUES]); echo "</pre>";
				foreach ($arIt[VALUES] as $valIt => $ar):
				$class = "";
				if ($ar["CHECKED"])
				$class.= " selected";
				if ($ar["DISABLED"])
				$class.= " disabled";
			?>
			<option>
				<label for="<?=$ar["CONTROL_ID"]?>" class="bx-filter-param-label<?=$class?>" data-role="label_<?=$ar["CONTROL_ID"]?>" onclick="smartFilter.selectDropDownItem(this, '<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')"><?=$ar["VALUE"]?></label>
			</option>	
			<?endforeach?>
			<?endforeach?>				
		</select>
							<input type="hidden" class="select-hidden-2" name="arrFilter_4" value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>">

		<select id="myselect_3" class="input input_select">			  
			<?	
				
				//echo "<pre>"; print_r($arResultItem); echo "</pre>";
				foreach ($arResultItem as $val => $arIt):				
				//echo "<pre>"; print_r($arIt[VALUES]); echo "</pre>";
				foreach ($arIt[VALUES] as $valIt => $ar):
				$class = "";
				if ($ar["CHECKED"])
				$class.= " selected";
				if ($ar["DISABLED"])
				$class.= " disabled";
			?>
			<option>
				<label for="<?=$ar["CONTROL_ID"]?>" class="bx-filter-param-label<?=$class?>" data-role="label_<?=$ar["CONTROL_ID"]?>" onclick="smartFilter.selectDropDownItem(this, '<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')"><?=$ar["VALUE"]?></label>
			</option>	
			<?endforeach?>
			<?endforeach?>				
		</select>
							<input type="hidden" class="select-hidden-3" name="arrFilter_5" value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>">
		<button class="button catalog__filter-button" type="submit"
		id="set_filter"
		name="set_filter" value="<?=GetMessage("CT_BCSF_SET_FILTER")?>"><?=GetMessage("CT_BCSF_SET_FILTER")?></button>			
</div>		
	</form>


<script type="text/javascript">
	var smartFilter = new JCSmartFilter('<?echo CUtil::JSEscape($arResult["FORM_ACTION"])?>', '<?=CUtil::JSEscape($arParams["FILTER_VIEW_MODE"])?>', <?=CUtil::PhpToJSObject($arResult["JS_FILTER_PARAMS"])?>);
</script>