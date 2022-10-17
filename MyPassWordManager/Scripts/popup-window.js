var popupWindowToolBar,
    popupWindowGrid,
    popupWindowStatusBar,
    popupWindowFormValidator;

var newKey = "_" + winkey;
if (winkey == "" || winkey == null) {
    newKey = "";
}
$(function () {
    popupWindowToolBar = $("#popupWindowToolBar" + newKey).kendoToolBar().data("kendoToolBar");
    popupWindowGrid = $("#popupWindowGrid" + newKey).kendoGrid({
        height: '99%',
        resizable: true,
        reorderable: true,
        columnMenu: true,
        selectable: "cell",
    }).data("kendoGrid");
    popupWindowStatusBar = $("#popupWindowStatusBar" + newKey);
    popupWindowFormValidator = $("#popupWindowForm" + newKey).kendoValidator().data("kendoValidator");
    var contentForm = $(".popupwindow-layout").find("form");
    contentForm.attr("data-hash", contentForm.find(":not([noserialize])").serialize().hashCode());    
});

function formHasChanges(formId) {
    debugger;
    var contentForm;
    if (formId == null || formId.length == 0) {
        contentForm = $(".popupwindow-layout").find("form");
    } else {
        contentForm = $(formId);
    }
    var hashCode = contentForm.find(":not([noserialize])").serialize().hashCode();
    return parseInt(contentForm.attr("data-hash")) != hashCode;
}

function formDisable(formId) {
    $(formId).find(":input:not([nodisable]),:text").each(function (i, item) {
        var widget = kendo.widgetInstance($(item));
        if (widget) {
            widget.enable(false);
        } else {
            $(item).attr("disabled", true);
        }
    });
}

function onCollapse() {
    kendo.resize($("#popupWindowGrid" + newKey));
}

function onExpand() {
    setTimeout(function () {
        kendo.resize($("#popupWindowGrid" + newKey));
    }, 500);
}

function setTitle(region, title) {
    $("#MainLayout").layout('panel', region).panel("setTitle", title);
}

function appendContent(region, content) {
    $('#MainLayout').layout('panel', region).append(content);
    $('.popupwindow-layout').layout();
}

function closePopupWindow() {
    popupWindow.close();
}