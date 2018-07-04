myButton.addEventListener('click',(e)=>{
    let request=new XMLHttpRequest()
    request.open('get','/xxx')
    request.setRequestHeader('xzw','111')
    request.send()
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            console.log('请求和响应都完毕了')
            console.log(request.status)
            if(request.status>=200&&request.status<300){
                console.log('说明请求成功')
                let string=request.responseText
                console.log(string)
                let object=window.JSON.parse(string)
                console.log('获取所有的响应头')
                console.log(request.getAllResponseHeaders())
                console.log('获取Content_type')
                console.log(request.getResponseHeader('Content-type'))
                console.log(typeof object)
                console.log(object)

            }else if(request.status>=400){
                console.log('说明请求失败')
            }
        }
    }
})