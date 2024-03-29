Class('App.Module1', 'linb.Com',{
    Instance:{
        base:["linb.UI"], 
        iniComponents:function(){
            // [[Code created by CrossUI RAD Tools
            var host=this, children=[], append=function(child){children.push(child.get(0))};
            
            append((new linb.UI.Pane)
                .setHost(host,"panelMain")
                .setLeft(0)
                .setTop(0)
                .setWidth(250)
                .setHeight(180)
            );
            
            host.panelMain.append((new linb.UI.Div)
                .setHost(host,"div37")
                .setLeft(20)
                .setTop(10)
                .setHeight(20)
                .setHtml("UI in Module1")
            );
            
            host.panelMain.append((new linb.UI.Tag)
                .setHost(host,"tag2")
                .setLeft(20)
                .setTop(70)
                .setWidth(218)
                .setHeight(98)
                .setTagKey("tag_SubModule1")
            );
            
            host.panelMain.append((new linb.UI.Button)
                .setHost(host,"button22")
                .setLeft(20)
                .setTop(40)
                .setWidth(170)
                .setCaption("button in Module1")
                .onClick("_button22_onclick")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Tools
        }, 
        _button22_onclick:function (profile, e, value) {
            alert("I'm in Module1");
        }
    }
});