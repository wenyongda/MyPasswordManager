//正常情况 toolbar+grid
function modifycss() {
    debugger
    if (viewGrid == "#payrollPayGrid" || viewGrid == "#payrollfinancegrid"
        || viewGrid == "#payrollPayGridAuto"
        || viewGrid == "#payrollPayGridCloud")//工资发放、发放财务
    {
        debugger;
        if (screen.height > 960) {
           // $($(viewGrid).children()[1]).css('height', '91%');
        } else if (screen.height > 768) {
            $($(viewGrid).children()[1]).css('height', '82%');
            $($(viewGrid).children()[2]).css('height', '82%');
        } else {
            if (screen.height == 720) {
                $($(viewGrid).children()[1]).css('height', '70%');
                $($(viewGrid).children()[2]).css('height', '70%');
            } else {
                $($(viewGrid).children()[1]).css('height', '70%');
                $($(viewGrid).children()[2]).css('height', '70%');
            }         
        };

    } else if (viewGrid == "#didiv") //署名viewGrid实际上是form 缴费基数比例
    {
        if (screen.height > 960) {
            if (screen.height<1080) {
                $(viewGrid).css('height', '140%');
            }        
        } else if (screen.height > 768) {
            $(viewGrid).css('height', '150%');
        } else {
                $(viewGrid).css('height', '210%');
        };
    }
    else if (viewGrid == "#orgdidiv") //署名viewGrid实际上是form 缴费基数比例
    {
        if (screen.height > 960) {
            //if (screen.height < 1080) {
            //    $(viewGrid).css('height', '140%');
            //}
        } else if (screen.height > 768) {
            //$(viewGrid).css('height', '150%');
        } else {
            $(viewGrid).css('height', '120%');
        };
    }
    else if (viewGrid == "#salaryIncomegrid" || viewGrid == "#PayrollBonusgrid"
        ) // 薪金收入|奖金发放|其他带有查询输入框的界面
    {
     
        if (screen.height > 960) {
        } else if (screen.height > 768) {
            $($(viewGrid).children()[1]).css('height', '87%');
        } else {
            $($(viewGrid).children()[1]).css('height', '79%');
        };
    }
    else if (viewGrid == "#empOverTimeGrid" || viewGrid == "#empLeaveGrid" || viewGrid == "#depOverTimeGrid")
    {

        if (screen.height > 960){
        }
        else if (screen.height > 768){
            $($(viewGrid).children()[2]).css('height', '74%');
            $($(viewGrid).children()[3]).css('height', '74%');
        } else
        {
            $($(viewGrid).children()[2]).css('height', '66%');
            $($(viewGrid).children()[3]).css('height', '66%');
        };
    }
    else if (viewGrid == "#payrollReportGrid")
    {

        if (screen.height > 960){
        }
        else if (screen.height > 768){
            $($(viewGrid).children()[2]).css('height', '72%');
            $($(viewGrid).children()[3]).css('height', '72s%');
        } else
        {
            $($(viewGrid).children()[2]).css('height', '68%');
            $($(viewGrid).children()[3]).css('height', '68%');
        };
    }
    else if (viewGrid == "#empGrid")
    {
        if (screen.height > 960)
        {
            if (screen.height < 1080)
            {
                $($(viewGrid).children()[1]).css('height', '91%');
                $($(viewGrid).children()[2]).css('height', '91%');
            }
        } else if (screen.height > 800)
        {
            $($(viewGrid).children()[1]).css('height', '88%');
            $($(viewGrid).children()[2]).css('height', '88%');
        } else
        {
            $($(viewGrid).children()[1]).css('height', '82%');
            $($(viewGrid).children()[2]).css('height', '82%');
        };
    }
    else//通用
    {
        debugger
        if (screen.height > 960)
        {
            if (screen.height < 1080)
            {
                $($(viewGrid).children()[1]).css('height', '91%');
            }
        } else if (screen.height > 800)
        {
            $($(viewGrid).children()[1]).css('height', '88%');
        } else
        {
            $($(viewGrid).children()[1]).css('height', '82%');
        };
    }


}

