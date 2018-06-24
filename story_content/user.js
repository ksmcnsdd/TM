function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eGJzwtd0C6":
        Script1();
        break;
      case "6YMQxjOxAiU":
        Script2();
        break;
      case "6ohowXsM4p7":
        Script3();
        break;
      case "6HUBVYFZ4Qc":
        Script4();
        break;
      case "6GhX8WjstMJ":
        Script5();
        break;
      case "61WlKNsPkSN":
        Script6();
        break;
      case "5mfRHhsbodF":
        Script7();
        break;
      case "5Xbw1YqJsKX":
        Script8();
        break;
      case "5eaeEY4EW9s":
        Script9();
        break;
      case "6qHWzev1zkp":
        Script10();
        break;
      case "6JU0m5G47ns":
        Script11();
        break;
      case "5y1FrsGWrvK":
        Script12();
        break;
      case "6ADXUWJnkBl":
        Script13();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script12()
{
  $("#tab-customlink").show();
}

function Script13()
{
  window.print();
}

