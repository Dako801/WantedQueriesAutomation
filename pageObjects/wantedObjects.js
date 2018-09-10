module.exports ={
       url:'http://localhost:3000/#/enter',
        elements: {
           Header: 'input[name="hdrInput"]',
           MkE: 'input[name="mkeInput"]',
           OAI:'input[name="oriInput"]',
           Name:'input[name="namInput"]',
           Female:'select[name="sexInput"] option[value="F"]',
           Male:'select[name="sexInput"] option[value="M"]',
           Black:'select[name="racInput"] option[value="B"]',
           Height:'input[name="hgtInput"]',
           Weight:'input[name="wgtInput"]',
           Hair:'input[name="haiInput"]',
           Offense:'input[name="offInput"]',
           DOW:'input[name="dowInput"]',
           DL:'input[name="olnInput"]',
           dLState:'input[name="olsInput"]',
           dlExpiration:'input[name="oldInput"]',
           licensePlate:'input[name="licInput"]',
           licenseState:'input[name="lisInput"]',
           licenseExpiration:'input[name="lidInput"]',
           submitBtn: '#saveBtn',
           queryBody: 'span[name="queryBody"]',
           clear: 'clearBtn',
           error:'li[class="errorMessage"]',
}

}