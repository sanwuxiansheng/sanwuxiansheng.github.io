(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{229:function(r,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var r=this,n=r.$createElement,e=r._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"数组去重的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组去重的方法"}},[r._v("#")]),r._v(" 数组去重的方法")]),r._v(" "),e("ul",[e("li",[r._v("双for循环去重")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function unique(arr) {\n    if (!Array.isArray(arr)) {\n        console.log('type error!')\n        return\n    }\n    let res = [arr[0]]\n    for (let i = 1; i < arr.length; i++) {\n        let flag = true\n        for (let j = 0; j < res.length; j++) {\n            if (arr[i] === res[j]) {\n                flag = false;\n                break\n            }\n        }\n        if (flag) {\n            res.push(arr[i])\n        }\n    }\n    return res\n}\n\n")])])]),e("ul",[e("li",[r._v("使用ES5中的for循环嵌套+splice()方法")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function getUnique() {\n        for (let i = 0; i < arr.length; i++) {\n            for (let j = (i+1); j < arr.length; j++) {\n                if(arr[i] == arr[j]){\n                    //删除重复的元素\n                    arr.splice(j, 1);\n                    j--;\n                }\n            }\n        }\n        return arr;\n    }\n")])])]),e("ul",[e("li",[r._v("indexOf方法")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("  let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2]\n  let newArr = []\n  for (let i = 0; i < arr.length; i++) {\n    if (newArr.indexOf(arr[i]) === -1) {\n      newArr.push(arr[i])\n    }\n  }\n  console.log(newArr) // 结果：[2, 8, 5, 0, 6, 7]\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("  let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2]\n  let newArr = []\n  for (let i = 0; i < arr.length; i++) {\n    if (arr.indexOf(arr[i]) === i) {\n      newArr.push(arr[i])\n    }\n  }\n  console.log(newArr) // 结果：[2, 8, 5, 0, 6, 7]\n\n")])])]),e("ul",[e("li",[r._v("sort()方法")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("  let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2]\n  arr.sort()\n  let newArr = [arr[0]]\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] !== newArr[newArr.length - 1]) {\n      newArr.push(arr[i])\n    }\n  }\n  console.log(newArr) // 结果：[0, 2, 5, 6, 7, 8]\n\n")])])]),e("ul",[e("li",[r._v("filter方法")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("var array = [1, 2, 1, 1, '1'];\n\nfunction unique(array) {\n    var res = array.filter(function(item, index, array){\n        return array.indexOf(item) === index;\n    })\n    return res;\n}\n\nconsole.log(unique(array));\n")])])]),e("ul",[e("li",[r._v("利用对象属性去重")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function unique(arr) {\n    if (!Array.isArray(arr)) {\n        console.log('type error!')\n        return\n    }\n    let res = [],\n        obj = {}\n    for (let i = 0; i < arr.length; i++) {\n        if (!obj[arr[i]]) {\n            res.push(arr[i])\n            obj[arr[i]] = 1\n        } else {\n            obj[arr[i]]++\n        }\n    }\n    return res\n}\n\n")])])]),e("ul",[e("li",[r._v("set与解构赋值去重")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function unique(arr) {\n    if (!Array.isArray(arr)) {\n        console.log('type error!')\n        return\n    }\n    return [...new Set(arr)]\n}\n\n")])])]),e("ul",[e("li",[r._v("Array.from与set去重")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function unique(arr) {\n    if (!Array.isArray(arr)) {\n        console.log('type error!')\n        return\n    }\n    return Array.from(new Set(arr))\n}\n\n")])])]),e("ul",[e("li",[r._v("利用includes()方法")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function getUnique() {\n\n    let uniqueArr = [];\n\n    for (let i = 0; i < arr.length; i++) {\n        if(!uniqueArr.includes(arr[i])){\n            uniqueArr.push(arr[i]);\n        }\n    }\n\n    return uniqueArr;\n\n}\n")])])]),e("ul",[e("li",[r._v("Object.keys()：存在唯一性")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("let a=[{a:1},{b:2},{c:3},{a:1},{d:2}]\nlet c=[1,2,3,4,5,6,1,2,3]\nfunction unique(arr){\n    let b=[]\n    let hash={}\n    for(let i=0;i<arr.length;i++){\n        if(!hash[JSON.stringify(arr[i])]){\n            hash[JSON.stringify(arr[i])]=true\n            b.push(arr[i])\n        }\n    }\n    return b\n}\n\n")])])]),e("ul",[e("li",[r._v("循环遍历之：map()/forEach()")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("let c=[1,2,3,4,5,6,1,2,3]\nfunction unique(arr){\n    let b=[]\n    arr.forEach(res=>{\n        if(b.indexOf(res)==-1){\n            b.push(res)\n        }\n    })\n    return b\n}\n\n")])])]),e("ul",[e("li",[r._v("使用ES6的Map")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function getUnique() {\n\n        let uniqueArr = [];\n\n        let map = new Map();\n        for (let i = 0; i < arr.length; i++) {\n            if(map.has(arr[i])){\n                map.set(arr[i], false);\n            }else{\n                map.set(arr[i], true);\n                uniqueArr.push(arr[i]);\n            }\n        }\n")])])]),e("ul",[e("li",[r._v("利用hash查找")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function unique(arr){\n    let result =[],hash = {};\n    for (let i = 0,len = arr.length; i<len; i++){\n        if(!hash[arr[i]]){\n            hash[arr[i]] = true;\n            result.push(arr[i])\n        }\n    }\n    return result;\n}\n\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);