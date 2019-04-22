import color from "color";

    import { Platform, Dimensions, PixelRatio } from "react-native";
    
    const deviceHeight = Dimensions.get("window").height;
    const deviceWidth = Dimensions.get("window").width;
    const platform = Platform.OS;
    const platformStyle = "material";
    const isIphoneX =
      platform === "ios" && deviceHeight === 812 && deviceWidth === 375;
    
    export default {"platformStyle":"material","platform":"ios","androidRipple":true,"androidRippleColor":"rgba(256, 256, 256, 0.3)","androidRippleColorDark":"rgba(0, 0, 0, 0.15)","btnUppercaseAndroidText":true,"badgeBg":"#ED1727","badgeColor":"#fff","badgePadding":3,"btnFontFamily":"System","btnDisabledBg":"#b5b5b5","buttonPadding":6,"btnPrimaryBg":"rgba(252,196,41,1)","btnPrimaryColor":"#fff","btnInfoBg":"#3F57D3","btnInfoColor":"#fff","btnSuccessBg":"#5cb85c","btnSuccessColor":"#fff","btnDangerBg":"#d9534f","btnDangerColor":"#fff","btnWarningBg":"#f0ad4e","btnWarningColor":"#fff","btnTextSize":16.5,"btnTextSizeLarge":22.5,"btnTextSizeSmall":12,"borderRadiusLarge":57,"iconSizeLarge":45,"iconSizeSmall":18,"cardDefaultBg":"rgba(37,36,38,1)","cardBorderColor":"#ccc","CheckboxRadius":0,"CheckboxBorderWidth":2,"CheckboxPaddingLeft":2,"CheckboxPaddingBottom":0,"CheckboxIconSize":18,"CheckboxFontSize":21,"DefaultFontSize":17,"checkboxBgColor":"#039BE5","checkboxSize":20,"checkboxTickColor":"#fff","brandPrimary":"rgba(252,196,41,1)","brandInfo":"#3F57D3","brandSuccess":"#5cb85c","brandDanger":"#d9534f","brandWarning":"#f0ad4e","brandDark":"#000","brandLight":"#f4f4f4","fontFamily":"System","fontSizeBase":15,"fontSizeH1":27,"fontSizeH2":24,"fontSizeH3":21,"footerHeight":55,"footerDefaultBg":"#3F51B5","footerPaddingBottom":0,"tabBarTextColor":"rgba(252,196,41,1)","tabBarTextSize":14,"activeTab":"#fff","sTabBarActiveTextColor":"rgba(9,14,20,1)","tabBarActiveTextColor":"rgba(252,196,41,1)","tabActiveBgColor":"rgba(37,36,38,1)","toolbarBtnColor":"rgba(252,196,41,1)","toolbarDefaultBg":"rgba(37,36,38,1)","toolbarHeight":64,"toolbarSearchIconSize":20,"toolbarInputColor":"#fff","searchBarHeight":30,"searchBarInputHeight":30,"toolbarBtnTextColor":"rgba(252,196,41,1)","toolbarDefaultBorder":"rgba(62,60,63,1)","iosStatusbar":"light-content","statusBarColor":"rgba(62,60,63,1)","darkenHeader":"#F0F0F0","iconFamily":"Ionicons","iconFontSize":30,"iconHeaderSize":29,"inputFontSize":17,"inputBorderColor":"rgba(62,60,63,1)","inputSuccessBorderColor":"#2b8339","inputErrorBorderColor":"#ed2f2f","inputHeightBase":50,"inputColor":"rgba(3,3,3,1)","inputColorPlaceholder":"#575757","btnLineHeight":19,"lineHeightH1":32,"lineHeightH2":27,"lineHeightH3":22,"lineHeight":20,"listBg":"rgba(62,60,63,1)","listBorderColor":"rgba(37,36,38,1)","listDividerBg":"#f4f4f4","listBtnUnderlayColor":"#DDD","listItemPadding":10,"listNoteColor":"#808080","listNoteSize":13,"defaultProgressColor":"#E4202D","inverseProgressColor":"#1A191B","radioBtnSize":25,"radioSelectedColorAndroid":"rgba(252,196,41,1)","radioBtnLineHeight":29,"segmentBackgroundColor":"rgba(252,196,41,1)","segmentActiveBackgroundColor":"rgba(62,60,63,1)","segmentTextColor":"#fff","segmentActiveTextColor":"rgba(255,255,255,1)","segmentBorderColor":"#fff","segmentBorderColorMain":"#3F51B5","defaultSpinnerColor":"#45D56E","inverseSpinnerColor":"#1A191B","tabDefaultBg":"rgba(37,36,38,1)","topTabBarTextColor":"rgba(228,236,255,1)","topTabBarActiveTextColor":"rgba(252,196,41,1)","topTabBarBorderColor":"#fff","topTabBarActiveBorderColor":"#fff","tabBgColor":"#F8F8F8","tabFontSize":15,"textColor":"rgba(255,255,255,1)","inverseTextColor":"rgba(0,0,0,1)","noteFontSize":14,"defaultTextColor":"#000","titleFontfamily":"Roboto","titleFontSize":19,"subTitleFontSize":14,"subtitleColor":"#FFF","titleFontColor":"rgba(252,196,41,1)","borderRadiusBase":2,"borderWidth":1,"contentPadding":10,"dropdownLinkColor":"rgba(252,196,41,1)","inputLineHeight":24,"deviceWidth":1536,"deviceHeight":706,"isIphoneX":false,"inputGroupRoundedBorderRadius":30}