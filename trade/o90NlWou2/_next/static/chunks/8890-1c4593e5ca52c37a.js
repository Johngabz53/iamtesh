(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8890,8218,2753,1786],{7722:function(e,t,r){"use strict";r.r(t),r.d(t,{decryptAccountKey:function(){return s},decryptMessageWithAccountKey:function(){return u},decryptMnemonic:function(){return v},decryptMnemonic256:function(){return m},decryptMnemonicWithSecret:function(){return y},decryptPvtKey:function(){return b},decryptTradeSecret:function(){return g},encryptAccountKey:function(){return a},encryptMessageWithAccountPublicKey:function(){return p},encryptMnemonic:function(){return l},encryptMnemonic256:function(){return h},encryptMnemonicWithSecret:function(){return f},encryptPvtKey:function(){return x},encryptTradeSecret:function(){return d}});var n=r(75948),i=r.n(n),o=r(64450),c=r(1684).Buffer,a=function(e,t,r,n,o){var c=i().PBKDF2(e,r,{keySize:8,iterations:n}),a=i().AES.encrypt(t,c,{mode:i().mode.CBC,iv:o});return{salt:i().enc.Hex.stringify(r),initializationVector:i().enc.Hex.stringify(o),encryptedAccountKey:i().enc.Hex.stringify(a.ciphertext)}},s=function(e,t,r,n,o){var c=i().lib.CipherParams.create({ciphertext:i().enc.Hex.parse(t)}),a=i().enc.Hex.parse(r),s=i().PBKDF2(e,a,{keySize:8,iterations:n}),u=i().AES.decrypt(c,s,{mode:i().mode.CBC,iv:i().enc.Hex.parse(o)});return i().enc.Hex.stringify(u)},u=function(e,t){var r=c.from(t,"hex"),n=c.from(e,"hex");return(0,o.pe)(r,n).toString("utf8")},p=function(e,t){var r=c.from(e,"utf8");return(0,o.HI)(t,r).toString("hex")},f=function(e,t,r,n){var o=i().AES.encrypt(e,n,{mode:i().mode.CBC,iv:r});return{initializationVectorHex:i().enc.Hex.stringify(r),ciphertextHex:i().enc.Hex.stringify(o.ciphertext)}},l=function(e,t,r){var n=i().SHA3("".concat(t,"encryption"));return f(e,t,r,n)},h=function(e,t,r){var n=i().SHA3("".concat(t,"encryption"),{outputLength:256});return f(e,t,r,n)},y=function(e,t,r,n){try{var o=i().lib.CipherParams.create({ciphertext:i().enc.Hex.parse(t)}),c=i().AES.decrypt(o,n,{mode:i().mode.CBC,iv:i().enc.Hex.parse(r)});return i().enc.Utf8.stringify(c)}catch(e){return""}},v=function(e,t,r){var n=i().SHA3("".concat(e,"encryption"));return y(e,t,r,n)},m=function(e,t,r){var n=i().SHA3("".concat(e,"encryption"),{outputLength:256});return y(e,t,r,n)};function d(e,t,r){var n=r;n||(n=i().enc.Hex.parse("527c5257cf92c1119ef9702b3fe7e71f"));var o=i().SHA3("".concat(t,"encryption"),{outputLength:256}),c=i().AES.encrypt(e,o,{mode:i().mode.CBC,iv:n}),a=i().enc.Hex.stringify(c.ciphertext);if(g(a,t,void 0)!==e)throw Error("encryptTradeSecret did not decrypt");return{initializationVectorHex:i().enc.Hex.stringify(n),ciphertextHex:a}}function g(e,t,r){var n=r;n||(n=i().enc.Hex.parse("527c5257cf92c1119ef9702b3fe7e71f"));var o=i().SHA3("".concat(t,"encryption"),{outputLength:256}),c=i().lib.CipherParams.create({ciphertext:i().enc.Hex.parse(e)}),a=i().AES.decrypt(c,o,{mode:i().mode.CBC,iv:n});return i().enc.Utf8.stringify(a)}var x=function(e,t,r){var n=r;n||(n=i().lib.WordArray.random(16));var o=i().SHA3("".concat(t,"encryption")),c=i().AES.encrypt(e,o,{mode:i().mode.CBC,iv:n});return{initializationVectorHex:i().enc.Hex.stringify(n),ciphertextHex:i().enc.Hex.stringify(c.ciphertext)}},b=function(e,t,r){try{var n=i().SHA3("".concat(e,"encryption")),o=i().lib.CipherParams.create({ciphertext:i().enc.Hex.parse(t)}),c=i().AES.decrypt(o,n,{mode:i().mode.CBC,iv:i().enc.Hex.parse(r)});return i().enc.Utf8.stringify(c)}catch(e){return""}}},56174:function(e,t,r){"use strict";r.d(t,{M9:function(){return s},Qc:function(){return a},Wi:function(){return u}});var n=r(28596),i=r(75948),o=r.n(i),c=r(1684).Buffer,a=function(e){for(var t=[],r="0123456789abcdef",n=0;n<e.length;n+=1){var i=e[n];t.push(r[(240&i)>>4]+r[15&i])}return t.join("")},s=function(e){var t=c.from(e,"hex");return a(n.crypto.hash160(t))},u=function(e){var t=o().SHA256(e);return o().enc.Hex.stringify(t)}},49866:function(e,t,r){"use strict";r.r(t),r.d(t,{generateAddressNode:function(){return W},generateEncAddress:function(){return I},generateEncryptedAccountKey:function(){return N},generatePrivatePublicPair:function(){return F},pubkeyFromPrivKey:function(){return V}});var n=r(75948),i=r.n(n),o=r(99722),c=r(10059),a=r.n(c),s=r(39630),u=r.n(s),p=r(74810),f=r(95946),l=r(99341),h=function(){var e=(0,l.P)();return e&&e.accountKey?i().enc.Hex.parse(e.accountKey):i().lib.WordArray.random(32)},y=function(e){var t=f.Z1(e),r=(0,p.fromSeed)(t);return{masterPrivateKey:r.privateKey.toString("hex"),masterPubKey:r.publicKey.toString("hex"),mnemonic:e}},v=r(7722),m=r(56174),d=r(57251),g=r(69047),x=r(97282),b=r(20484),K=r(25646),S=r(57807),k=r(93362),w=r(1692),P=r(28596),H=r(46103),A=r(17029),Z=r(87695),j=r(63280),E=r(29097),C=r(1684).Buffer,B="m/49'/0'/0'/0/0",T="m/84'/2'/0'/0/0",M="m/44'/60'/0'/0/0",_="m/44'/52752'/0'/0/0",L=function(){function e(t){(0,g.Z)(this,e),(0,b.Z)(this,"mnemonicPhrase",void 0),this.mnemonicPhrase=t}return(0,x.Z)(e,[{key:"masterPublic",value:function(e){var t=(0,f.Z1)(this.mnemonicPhrase);return(0,p.fromSeed)(t).derivePath(e).neutered().toBase58()}},{key:"addressEthereum",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=(0,f.Z1)(this.mnemonicPhrase),r=(0,p.fromSeed)(t).derivePath(e);return H.computeAddress(r.publicKey)}},{key:"signerEthereum",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=(0,f.Z1)(this.mnemonicPhrase),r=(0,p.fromSeed)(t).derivePath(e);return new j.EthereumSigner(r.privateKey)}},{key:"signerBitcoin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=(0,f.Z1)(this.mnemonicPhrase),r=(0,p.fromSeed)(t).derivePath(e),n=u().encode(128,r.privateKey,!0);return new j.BitcoinSigner(n)}},{key:"signerLitecoin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=(0,f.Z1)(this.mnemonicPhrase),r=(0,p.fromSeed)(t,Z.V).derivePath(e).toWIF();return new j.LitecoinSigner(r)}},{key:"addressBitcoin",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"p2sh(p2wpkh)",n=(0,f.Z1)(this.mnemonicPhrase),i=(0,p.fromSeed)(n).derivePath(t);return"p2sh(p2wpkh)"===r&&(e=P.payments.p2sh({redeem:P.payments.p2wpkh({pubkey:i.publicKey})}).address),e}},{key:"addressLitecoin",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"p2wpkh",n=(0,f.Z1)(this.mnemonicPhrase),i=(0,p.fromSeed)(n,Z.V).derivePath(t);return"p2wpkh"===r&&(e=P.payments.p2wpkh({pubkey:i.publicKey,network:Z.V}).address),e}},{key:"addressCelo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=(0,f.Z1)(this.mnemonicPhrase),r=(0,p.fromSeed)(t).derivePath(e);return H.computeAddress(r.publicKey)}},{key:"signerCelo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=(0,f.Z1)(this.mnemonicPhrase),r=(0,p.fromSeed)(t).derivePath(e);return new j.EthereumSigner(r.privateKey)}},{key:"addressTrx",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=(0,f.Z1)(this.mnemonicPhrase),r=(0,p.fromSeed)(t).derivePath(e);return(0,E.trxComputeAddress)(r.privateKey)}},{key:"signerTrx",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=(0,f.Z1)(this.mnemonicPhrase),r=(0,p.fromSeed)(t).derivePath(e);return new j.EthereumSigner(r.privateKey)}},{key:"signerSubstrate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"//0",t="".concat(this.mnemonicPhrase).concat(e),r=this._suriToPair(t),n=r.secretKey,i=r.publicKey;return new j.SubstrateSigner(n,i)}},{key:"addressSubstrate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"//0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r="".concat(this.mnemonicPhrase).concat(e),n=this._suriToPair(r).publicKey;return(0,K.m)(n,t)}},{key:"tradeSecret",value:function(e){var t=(0,f.Z1)(this.mnemonicPhrase,e);return(0,p.fromSeed)(t).derivePath("m/49'/0'/99'/0/0").publicKey.toString("hex")}},{key:"_seedMnemonicSubstrate",value:function(e){var t=(0,f.oy)(this.mnemonicPhrase),r=C.from(this._salt(this._normalize(e)),"utf8");return(0,A.pbkdf2Sync)(C.from(t,"hex"),r,2048,64,"sha512").slice(0,32)}},{key:"_seedMnemonicBip39",value:function(e){return(0,f.Z1)(this.mnemonicPhrase,e)}},{key:"_normalize",value:function(e){return(e||"").normalize("NFKD")}},{key:"_salt",value:function(e){return"mnemonic"+(e||"")}},{key:"_suriToParts",value:function(e){var t=e.match(/^(\w+( \w+)*)((\/\/?[^/]+)*)(\/\/\/(.*))?$/),r=(0,d.Z)(t,7),n=r[1],i=r[3];return{password:r[6],path:(0,S.c)(i).path,phrase:n}}},{key:"_schnorrkelFromU8a",value:function(e){return{publicKey:e.slice(64,96),secretKey:e.slice(0,64)}}},{key:"_suriToPair",value:function(e){var t=this._suriToParts(e),r=t.password,n=t.path,i=this._seedMnemonicSubstrate(r),o=(0,w.Mw)(i);return(0,k.p)(this._schnorrkelFromU8a(o),n,"sr25519")}}]),e}(),z=r(1684).Buffer,N=function(e){var t=i().lib.WordArray.random(16),r=Math.floor(1e4*Math.random())+2e4,n=i().lib.WordArray.random(16),o=h(),c=i().enc.Hex.stringify(o),a=(0,v.encryptAccountKey)(e,o,t,r,n),s=y(f.OF(256)).mnemonic,u=i().lib.WordArray.random(16),p=(0,v.encryptMnemonic)(s,o,u);return{iterations:r,encryptedMnemonic:p.ciphertextHex,encryptedMnemonicIv:p.initializationVectorHex,salt:a.salt,initializationVector:a.initializationVector,encryptedAccountKey:a.encryptedAccountKey,publicIdentityKey:F(c)}},F=function(e){var t=z.from(e,"hex"),r=a().publicKeyCreate(t,!1),n=(0,m.Qc)(r);return n.slice(2,n.length)},I=function(e,t,r,n){var i=W(t,n),o=(0,v.encryptPvtKey)(i.privKey,e,r),c=o.ciphertextHex,a=o.initializationVectorHex,s=i.pubKey;return{address:i.address,encryptedPrivateKey:c,encryptedPrivateKeyIv:a,publicKey:s}},W=function(e,t){if(!e)throw Error("Error: mnemonic phrase cannot be empty");if(24!==e.split(" ").length)throw Error("Error: mnemonic phrase length is not 24");var r=new L(e);if("ETH"===t){var n=r.signerEthereum(),i=r.addressEthereum();return{privKey:(0,o.bufferToHex)(n.privateKey),pubKey:n.publicKey,address:i}}if("BTC"===t){var c=r.signerBitcoin(),a=r.addressBitcoin(),s=c.publicKey.toString("hex");return{privKey:u().encode(128,c.privateKey,!0),pubKey:s,address:a}}if("LTC"===t){var p=r.signerLitecoin(),f=r.addressLitecoin(),l=p.publicKey.toString("hex");return{privKey:p.toPrivateKeyWif(),pubKey:l,address:f}}if("CELO"===t){var h=r.signerCelo(),y=r.addressCelo();return{privKey:(0,o.bufferToHex)(h.privateKey),pubKey:h.publicKey,address:y}}if("TRX"===t){var v=r.signerTrx(),m=r.addressTrx();return{privKey:(0,o.bufferToHex)(v.privateKey),pubKey:v.publicKey,address:m}}if(["DOT","KSM"].includes(t)){var d=r.signerSubstrate(),g=r.addressSubstrate("//0",{KSM:2,DOT:0}[t]);return{privKey:"".concat(e).concat("//0"),pubKey:z.from(d.publicKey.buffer).toString("hex"),address:g}}},V=function(e,t){return"ETH"===t?new j.EthereumSigner(e).publicKey:"BTC"===t?new j.BitcoinSigner(e).publicKey.toString("hex"):"LTC"===t?new j.LitecoinSigner(e).publicKey.toString("hex"):""}},87695:function(e,t,r){"use strict";r.d(t,{A:function(){return i},V:function(){return n}});var n={messagePrefix:"\x19Litecoin Signed Message:\n",bech32:"ltc",bip32:{public:27108450,private:27106558},pubKeyHash:48,scriptHash:50,wif:176},i=1.1},78825:function(e,t,r){"use strict";r.d(t,{e:function(){return o}});var n=r(71048),i=r(7722),o=function(e,t){return e.accountKey=(0,i.decryptAccountKey)(t,e.encrypted_account_key,e.salt,e.iterations,e.initialization_vector),e.accountKey||console.error("Failed to decrypt account key"),(0,n.setCookie)(null,"polteageist",JSON.stringify(e),{maxAge:31536e3,path:"/",domain:".localcoinswap.com"}),localStorage.removeItem("secret"),!e.redirect_link||(window.location.href=e.redirect_link,!1)}},63280:function(e,t,r){"use strict";r.r(t),r.d(t,{BitcoinMessageSigner:function(){return _},BitcoinSigner:function(){return M},EthereumSigner:function(){return N},LitecoinSigner:function(){return L},SubstrateSigner:function(){return z}});var n=r(91806),i=r(67349),o=r(97768),c=r(82440),a=r(26094),s=r(84781),u=r(69047),p=r(97282),f=r(20484),l=r(89927),h=r.n(l),y=r(68560),v=r(664),m=r(4570),d=r(46103),g=r(90266),x=r(51645),b=r(37657),K=r(37307),S=r(88341),k=r(1692),w=r(32154),P=r.n(w),H=r(41024),A=r(99390),Z=r.n(A),j=r(39630),E=r.n(j),C=r(87695),B=r(1684).Buffer;function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var M=function(){function e(t){(0,u.Z)(this,e),(0,f.Z)(this,"privateKey",void 0),(0,f.Z)(this,"publicKey",void 0);var r=E().decode(t);if(!Z().isPrivate(r.privateKey))throw TypeError("Private key not in range [1, n)");this.privateKey=r.privateKey,this.publicKey=Z().pointFromScalar(this.privateKey,r.compressed)}return(0,p.Z)(e,[{key:"sign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.privateKey)throw Error("Missing private key");var r=Z().sign(e,this.privateKey);if(t)return r;for(var n=B.alloc(32,0),i=0;r[0]>127;)i++,n.writeUIntLE(i,0,6),r=Z().signWithEntropy(e,this.privateKey,n);return r}},{key:"verify",value:function(e,t){return Z().verify(e,this.publicKey,t)}},{key:"compressed",value:function(){return!0}},{key:"toMessageSigner",value:function(){var e=E().encode(128,this.privateKey,!0);return new _(e)}}]),e}(),_=function(e){(0,c.Z)(r,e);var t=T(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,p.Z)(r,[{key:"sign",value:function(e){var t=(0,o.Z)((0,s.Z)(r.prototype),"sign",this).call(this,e,!0),n=this.recidFromSig(e,this.publicKey,t);return{signature:t,recovery:n}}},{key:"recidFromSig",value:function(e,t,r){var n=new H.ec("secp256k1"),i=n.curve.n,o=n.curve.g,c=n.curve.decodePoint(t),a=new(P())(r.slice(0,32)),s=new(P())(r.slice(32,64)),u=new(P())(e),p=s.invm(i),f=u.mul(p).umod(i),l=a.mul(p).umod(i),h=o.mulAdd(f,c,l),y=h.y.isOdd();return(h.x.cmp(i)>=0==!0?1:0)<<1|y<<0}}]),r}(M),L=function(){function e(t){(0,u.Z)(this,e),(0,f.Z)(this,"privateKey",void 0),(0,f.Z)(this,"publicKey",void 0);var r=E().decode(t);if(!Z().isPrivate(r.privateKey))throw TypeError("Private key not in range [1, n)");this.privateKey=r.privateKey,this.publicKey=Z().pointFromScalar(this.privateKey,r.compressed)}return(0,p.Z)(e,[{key:"sign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.privateKey)throw Error("Missing private key");var r=Z().sign(e,this.privateKey);if(t)return r;for(var n=B.alloc(32,0),i=0;r[0]>127;)i++,n.writeUIntLE(i,0,6),r=Z().signWithEntropy(e,this.privateKey,n);return r}},{key:"toPrivateKeyWif",value:function(){return E().encode(C.V.wif,this.privateKey,!0)}},{key:"verify",value:function(e,t){return Z().verify(e,this.publicKey,t)}},{key:"compressed",value:function(){return!0}}]),e}(),z=function(){var e,t;function r(e,t){(0,u.Z)(this,r),(0,f.Z)(this,"privateKey",void 0),(0,f.Z)(this,"publicKey",void 0),(0,f.Z)(this,"key",void 0),this.privateKey=e,this.publicKey=t}return(0,p.Z)(r,[{key:"sign",value:(e=(0,i.Z)(h().mark(function e(t){var r,n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.I)();case 2:return r=(0,g.vq)(t)?(0,x.G)(t.toString()):(0,b.d)(t),n=(0,k.x1)(this.publicKey,this.privateKey,r),e.abrupt("return",(0,K.c)(n));case 5:case"end":return e.stop()}},e,this)})),function(t){return e.apply(this,arguments)})},{key:"verify",value:(t=(0,i.Z)(h().mark(function e(t,r){var n,i,o;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.I)();case 2:return n=(0,g.vq)(t)?(0,x.G)(t.toString()):(0,b.d)(t),i=(0,g.vq)(r)?(0,x.G)(r.toString()):(0,b.d)(r),o=(0,k.QK)(i,n,this.publicKey),e.abrupt("return",o);case 6:case"end":return e.stop()}},e,this)})),function(e,r){return t.apply(this,arguments)})}]),r}(),N=function(e){(0,c.Z)(a,e);var t,r,o=T(a);function a(e){(0,u.Z)(this,a),t=o.call(this),(0,f.Z)((0,n.Z)(t),"privateKey",void 0),(0,f.Z)((0,n.Z)(t),"publicKey",void 0);var t,r=new H.ec("secp256k1").keyFromPrivate((0,v.lE)(e));return t.privateKey=e,t.publicKey=r.getPublic(!0,"hex"),t}return(0,p.Z)(a,[{key:"getAddress",value:function(){var e=(0,d.computeAddress)(this.publicKey);return new Promise(function(){return e})}},{key:"signTransaction",value:(t=(0,i.Z)(h().mark(function e(t){var r,n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.signMessage((0,m.w)((0,d.serialize)(t)));case 2:return r=e.sent,n=(0,d.serialize)(t,r),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"signMessage",value:(r=(0,i.Z)(h().mark(function e(t){var r,n,i,o;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new H.ec("secp256k1").keyFromPrivate((0,v.lE)(this.privateKey)),32!==(n=(0,v.lE)(t)).length&&console.error("bad digest length","digest",t),i=r.sign(n,{canonical:!0}),o=(0,v.gV)((0,v.N)({recoveryParam:i.recoveryParam,r:(0,v.$m)("0x"+i.r.toString(16),32),s:(0,v.$m)("0x"+i.s.toString(16),32)})),e.abrupt("return",o);case 7:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"sign",value:function(e){return this.signMessage(e)}},{key:"connect",value:function(){return new a(this.privateKey)}}]),a}(y.E)},29097:function(e,t,r){"use strict";r.r(t),r.d(t,{ECKeySign:function(){return x},TrxSHA256:function(){return h},getBase58CheckAddress:function(){return y},getPubKeyFromPriKey:function(){return m},isAddressValid:function(){return d},trxComputeAddress:function(){return v},trxRelaySignature:function(){return b},trxSignTransaction:function(){return g}});for(var n=r(664),i=r(4570),o=r(41024),c=r(25453),a=r.n(c),s=r(99722),u=r(80014),p="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",f={},l=0;l<p.length;l++)f[p.charAt(l)]=l;function h(e){var t=(0,s.bufferToHex)(e),r=u.JQ(t);return Array.from((0,n.lE)(r))}function y(e){var t=h(e),r=h(t).slice(0,4);return function(e){if(0===e.length)return"";var t,r,n=[0];for(t=0;t<e.length;t++){for(r=0;r<n.length;r++)n[r]<<=8;n[0]+=e[t];var i=0;for(r=0;r<n.length;++r)n[r]+=i,i=n[r]/58|0,n[r]%=58;for(;i;)n.push(i%58),i=i/58|0}for(t=0;0===e[t]&&t<e.length-1;t++)n.push(0);return n.reverse().map(function(e){return p[e]}).join("")}(r=e.concat(r))}function v(e){var t=m(e);65===t.length&&(t=t.slice(1));var r="41"+(0,i.w)(t).toString().substring(2).substring(24);return y(Array.from((0,n.lE)("0x".concat(r))))}function m(e){for(var t=new o.ec("secp256k1").keyFromPrivate(e,"bytes").getPublic(),r=t.x,i=t.y,c=r.toString("hex");c.length<64;)c="0".concat(c);for(var a=i.toString("hex");a.length<64;)a="0".concat(a);var s="0x04".concat(c).concat(a);return Array.from((0,n.lE)(s))}function d(e){if("string"!=typeof e||34!==e.length)return!1;var t=function(e){if(0===e.length)return[];var t,r,n=[0];for(t=0;t<e.length;t++){var i=e[t];if(!(i in f))throw Error("Non-base58 character");for(r=0;r<n.length;r++)n[r]*=58;n[0]+=f[i];var o=0;for(r=0;r<n.length;++r)n[r]+=o,o=n[r]>>8,n[r]&=255;for(;o;)n.push(255&o),o>>=8}for(t=0;"1"===e[t]&&t<e.length-1;t++)n.push(0);return n.reverse()}(e);if(25!==t.length||65!==t[0])return!1;var r=t.slice(21),n=h(t=t.slice(0,21)),i=h(n).slice(0,4);return r[0]==i[0]&&r[1]==i[1]&&r[2]==i[2]&&r[3]==i[3]}function g(e,t){var r=Array.from((0,n.lE)(e)),i=t.txID,o=x(Array.from((0,n.lE)("0x".concat(i))),r);return Array.isArray(t.signature)?t.signature.includes(o)||t.signature.push(o):t.signature=[o],t}function x(e,t){for(var r=new o.ec("secp256k1").keyFromPrivate(t,"bytes").sign(e),i=r.r,c=r.s,a=r.recoveryParam,s=i.toString("hex");s.length<64;)s="0".concat(s);for(var u=c.toString("hex");u.length<64;)u="0".concat(u);return s+u+(0,n.Dv)(a).slice(2)}var b=function(e,t,r){var n="0x".concat(e.replace(/-/g,"")),i=a().soliditySHA3(["bytes16","uint8"],[n,t]),o=(0,s.hashPersonalMessage)(i),c=(0,s.ecsign)(o,(0,s.toBuffer)(r));return{r:(0,s.bufferToHex)(c.r),s:(0,s.bufferToHex)(c.s),v:c.v}}},38741:function(e,t,r){"use strict";var n=r(72242),i=r.n(n),o=r(540),c=r(27730),a=function(e){var t=(0,o.useRouter)(),r="https://localcoinswap.com".concat(t.asPath),n={"@context":"http://schema.org","@type":"WebSite",name:"LocalCoinSwap",alternateName:e.title,url:"https://localcoinswap.com/"};return(0,c.jsxs)(i(),{children:[(0,c.jsx)("title",{children:e.title}),(0,c.jsx)("meta",{name:"description",content:e.description}),(0,c.jsx)("meta",{itemProp:"name",content:e.title}),(0,c.jsx)("meta",{itemProp:"description",content:e.description}),(0,c.jsx)("meta",{itemProp:"image",content:e.ogImage}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,c.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,c.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,c.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,c.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,c.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#000000"}),(0,c.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,c.jsx)("meta",{name:"msapplication-navbutton-color",content:"#000000"}),(0,c.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#000000"}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:title",content:e.title}),(0,c.jsx)("meta",{property:"og:url",content:r}),(0,c.jsx)("meta",{property:"og:site_name",content:"LocalCoinSwap"}),(0,c.jsx)("meta",{property:"og:image",content:e.ogImage}),(0,c.jsx)("meta",{property:"og:description",content:e.description}),(0,c.jsx)("meta",{property:"og:locale",content:"en"}),(0,c.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,c.jsx)("meta",{name:"twitter:title",content:e.title}),(0,c.jsx)("meta",{name:"twitter:description",content:e.description}),(0,c.jsx)("meta",{name:"twitter:image",content:e.ogImage}),(0,c.jsx)("meta",{name:"referrer",content:"strict-origin-when-cross-origin"}),(0,c.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,c.jsx)("meta",{name:"google-site-verification",content:"1FBqGYJAK-3fwIpqbq9H9888YvDy4Ny9OMzH5wQEPRw"}),(0,c.jsx)("meta",{name:"apple-mobile-web-app-title",content:"LocalCoinSwap"}),(0,c.jsx)("link",{rel:"base",href:"https://localcoinswap.com/"}),(0,c.jsx)("meta",{name:"robots",content:"index/follow"}),(0,c.jsx)("meta",{name:"googlebot",content:"index/follow"}),(0,c.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:e.ldJson?JSON.stringify(e.ldJson):JSON.stringify(n)}})]})};a.defaultProps={ogImage:"https://localcoinswap.com/images/og/general-v2.jpg"},t.Z=a},11406:function(e,t,r){"use strict";var n=r(67996),i=r(63487),o=r.n(i),c=r(25689),a=r(27730),s=function(e){var t=(0,n.Z)("unauth-common").t,r=(0,c.Z)(),i=function(e){r.track("Begin Registration",{source:e})},s=function(e){r.track("Begin Login",{source:e})};return(0,a.jsx)("header",{children:(0,a.jsx)("nav",{className:"flex py-3 px-4 bg-ocean-900",children:(0,a.jsxs)("div",{className:"flex content-center items-center justify-between container mx-auto",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)(o(),{href:"/",prefetch:!1,className:"flex items-center text-white text-sm font-700 ml-2",children:[(0,a.jsx)("div",{className:"logo-colored"}),(0,a.jsx)("div",{className:"leading-5",children:"LocalCoinSwap"})]})}),(0,a.jsxs)("div",{className:"flex",children:[e.showLogin&&(0,a.jsx)(o(),{href:"/login",prefetch:!1,className:"px-2 md:px-3 py-2 text-sm text-autumn font-700 hover:underline leading-5",role:"menuitem",onClick:function(){return s("login_nav")},children:t("login")}),e.showRegister&&(0,a.jsx)(o(),{href:"/register",prefetch:!1,className:"inline-block align-middle btn-orange-gradient text-white text-sm font-700 py-2 px-4 ml-4 border border-autumn rounded-full",role:"menuitem",onClick:function(){return i("login_nav")},children:t("register")})]})]})})})};s.defaultProps={showLogin:!0,showRegister:!0},t.Z=s},95856:function(){},70573:function(){},46601:function(){},89214:function(){},85568:function(){},27790:function(){},52361:function(){},94616:function(){},55024:function(){}}]);