function ChainImport(source, isAsync, isDefer, on_load){
    
    function isFunction(variable){
        return typeof variable === 'function';
    }
    
    if(isFunction(isAsync)){
        on_load = isAsync;
        isAsync = false;
    }else if(isFunction(isDefer)){
        on_load = isDefer;
        isDefer = false;
    }
    
    isAsync = isAsync || false;
    isDefer = isDefer || false;

    var script = document.createElement('script');
    script.src = source;
    script.async = isAsync;
    script.defer = isDefer;
    script.onload = on_load;
    document.head.appendChild(script);

}