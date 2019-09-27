function Questions() {
    var isKaasGeel = prompt("Is de kaas geel? | Ja/Nee").toLowerCase();
    var uwKaas;

    if (isKaasGeel === "ja") {
        var gaten = prompt("Zitten er gaten in? | Ja/Nee").toLowerCase();
        if (gaten === "ja") {
            var isKaasDuur = prompt("Is de kaas belachelijk duur? | Ja/Nee").toLowerCase();
            if (isKaasDuur === "ja") {
                uwKaas = "Emmenthaler";
                document.write("Dit is uw kaas: " + uwKaas);
            }
            else if (isKaasDuur === "nee") {
                uwKaas = "Leerdammer";
                document.write("Dit is uw kaas: " + uwKaas);
            }
            else {
                alert("U kunt alleen kiezen tussen JA of NEE!");
                Questions();
            }
        }
        else if (gaten === "nee") {
            var hardheid = prompt("Is de kaas hard als steen? | Ja/Nee").toLowerCase();
            if (hardheid === "ja") {
                uwKaas = "Parmigiano Reggiano";
                document.write("Dit is uw kaas: " + uwKaas);

            }
            else if (hardheid === "nee") {

                uwKaas = "Goudse kaas";
                document.write("Dit is uw kaas: " + uwKaas);
            }
            else {
                alert("U kunt alleen kiezen tussen JA of NEE!");
                Questions();
            }
        }
        else {
            alert("U kunt alleen kiezen tussen JA of NEE!");
            Questions();
        }
    }
    else if (isKaasGeel === "nee"){
        var schimmel = prompt("Heeft de kaas blauwe schimmels? | Ja/Nee").toLowerCase();
        if (schimmel === "ja") {
            var schimmelKaasMetKorst = prompt("Heeft de kaas een korst? | Ja/Nee").toLowerCase();
            if (schimmelKaasMetKorst === "ja") {
                uwKaas = "Bleu de Rochbaron";
                document.write("Dit is uw kaas: " + uwKaas);
            }
            else if (schimmelKaasMetKorst === "nee") {
                uwKaas = "Foume d'Ambert";
                document.write("Dit is uw kaas: " + uwKaas);
            }
            else {
                alert("U kunt alleen kiezen tussen JA of NEE!");
                Questions();
            }
        }
        else if (schimmel === "nee") {
            var korst = prompt("Heeft de kaas een korst? | Ja/Nee").toLowerCase();
            if (korst === "ja") {
                uwKaas = "Camembert";
                document.write("Dit is uw kaas: " + uwKaas);
            }
            else if (korst === "nee") {
                uwKaas = "Mozzarella";
                document.write("Dit is uw kaas: " + uwKaas);
            }
            else {
                alert("U kunt alleen kiezen tussen JA of NEE!");
                Questions();
            }
        }
        else {
            alert("U kunt alleen kiezen tussen JA of NEE!");
            Questions();
        }
    }
    else {
        alert("U kunt alleen kiezen tussen JA of NEE!");
        Questions();
    }
}

Questions();