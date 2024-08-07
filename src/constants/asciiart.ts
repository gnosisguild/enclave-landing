const art = `
  ɍ\ufffd\ufffd\ufffdߞ\ufffdC\ufffd(jz\ufffd\ufffd\ufffdm\ufffd\ufffdQ0'\ufffd       R\ufffdI\ufffdP\ufffdn\ufffd\ufffdr            
    \ufffd\ufffd\ufffd/P\ufffd\ufffd         $\ufffdP     \ufffd\ufffd\ufffd   \ufffdɍ\ufffd\ufffd\ufffdߞ\ufffdC          
    \ufffd(jz\ufffd\ufffd\ufffd           m    \ufffd        \ufffdQ0'\ufffdR          
    \ufffdI\ufffdP\ufffdn\ufffd     \ufffd                   r\ufffd\ufffd\ufffd/           
    P\ufffd\ufffd$\ufffdP\ufffd    \ufffd\ufffd                  \ufffdɍ\ufffd\ufffd\ufffd            
    ߞ\ufffdC\ufffd(jz\ufffd\ufffd\ufffdm\ufffd\ufffd              .Q0'\ufffdR\ufffdI\ufffdP\ufffd          
    n\ufffd\ufffdr\ufffd\ufffd\ufffd    /P                   \ufffd\ufffd$\ufffdP\ufffd\ufffd         
    \ufffd\ufffdɍ\ufffd\ufffd\ufffdߞ     \ufffd                     C\ufffd(jz         
    \ufffd\ufffd\ufffdm\ufffd\ufffdQ            .0              '\ufffdR\ufffd         
    I\ufffdP\ufffdn\ufffd\ufffd           r\ufffd\ufffd \ufffd/P\ufffd\ufffd       $\ufffdP      We're hiring:
   \ufffd\ufffd\ufffd\ufffdɍ\ufffd\ufffd\ufffdߞ\ufffdC\ufffd(jz\ufffd\ufffd\ufffdm\ufffd\ufffd  Q0'\ufffdR\ufffdI\ufffdP\ufffdn\ufffd\ufffd        https://hiring.enclave.gg
`
export const asciiArt = art

export const createAsciiArt = (encryptedMessage: string) => {
  const o = encryptedMessage.split('')
  return `
    ${o[1]}${o[2]}${o[3]}${o[4]}${o[5]}${o[6]}${o[7]}${o[8]}${o[9]}${o[10]}${o[11]}${o[12]}${o[13]}${o[14]}${o[15]}${o[16]}${o[17]}${o[18]}${o[19]}${o[20]}${o[21]}       ${o[22]}${o[23]}${o[24]}${o[25]}${o[26]}${o[27]}${o[28]}${o[29]}${o[30]}${o[31]}
      ${o[32]}${o[33]}${o[34]}${o[35]}${o[36]}${o[37]}${o[38]}         ${o[39]}${o[40]}${o[41]}     ${o[42]}${o[43]}${o[44]}   ${o[45]}${o[46]}${o[47]}${o[48]}${o[49]}${o[50]}${o[51]}${o[52]}
      ${o[53]}${o[54]}${o[55]}${o[56]}${o[57]}${o[58]}${o[59]}           ${o[60]}    ${o[61]}        ${o[62]}${o[63]}${o[64]}${o[65]}${o[66]}${o[67]}
      ${o[68]}${o[69]}${o[70]}${o[71]}${o[72]}${o[73]}${o[74]}     ${o[75]}                   ${o[76]}${o[77]}${o[78]}${o[79]}${o[80]}
      ${o[81]}${o[82]}${o[83]}${o[84]}${o[85]}${o[86]}${o[87]}    ${o[88]}${o[89]}                  ${o[90]}${o[91]}${o[92]}${o[93]}${o[94]}
      ${o[95]}${o[96]}${o[97]}${o[98]}${o[99]}${o[100]}${o[101]}${o[102]}${o[103]}${o[104]}${o[105]}${o[106]}${o[107]}              .${o[108]}${o[109]}${o[110]}${o[111]}${o[112]}${o[113]}${o[114]}${o[115]}${o[116]}${o[117]}
      ${o[118]}${o[119]}${o[120]}${o[121]}${o[122]}${o[123]}${o[124]}    ${o[125]}${o[126]}                   ${o[127]}${o[128]}${o[129]}${o[130]}${o[131]}${o[132]}${o[133]}
      ${o[134]}${o[135]}${o[136]}${o[137]}${o[138]}${o[139]}${o[140]}     ${o[141]}                     ${o[142]}${o[143]}${o[144]}${o[145]}${o[146]}
      ${o[147]}${o[148]}${o[149]}${o[150]}${o[151]}${o[152]}${o[153]}            .${o[154]}              ${o[155]}${o[156]}${o[157]}${o[158]}
      ${o[159]}${o[160]}${o[161]}${o[162]}${o[163]}${o[164]}${o[165]}           ${o[166]}${o[167]}${o[168]} ${o[169]}${o[170]}${o[171]}${o[172]}${o[173]}       ${o[174]}${o[175]}${o[176]}
     ${o[177]}${o[178]}${o[179]}${o[180]}${o[181]}${o[182]}${o[183]}${o[184]}${o[185]}${o[186]}${o[187]}${o[188]}${o[189]}${o[190]}${o[191]}${o[192]}${o[193]}${o[194]}${o[195]}${o[196]}${o[197]}  ${o[198]}${o[199]}${o[200]}${o[201]}${o[202]}${o[203]}${o[204]}${o[205]}${o[206]}${o[207]}${o[208]}${o[209]}${o[210]}
  `
}
