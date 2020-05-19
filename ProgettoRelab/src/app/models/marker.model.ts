export class Marker {
    icon = {}
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("Gas")) {
            this.icon = { url: './assets/img/gas.ico' };
             this.label = "";
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = { url: './assets/img/electricity.ico' };
             this.label = "";
        }
        if(this.label.includes("Gasolio"))
        {
            this.icon = { url: './assets/img/oil.ico' };
             this.label = "";
        }
        if(this.label.includes("Teleriscaldamento"))
        {
            this.icon = { url: './assets/img/teleriscaldamento.ico' };
             this.label = "";
        }
        if(this.label.includes("GPL"))
        {
            this.icon = { url: './assets/img/lpg.ico' };
             this.label = "";
        }
        if(this.label.includes("NULL"))
        {
            this.icon = { url: './assets/img/question.ico' };
             this.label = "";
        }
        if(this.label.includes("Biomasse solide"))
        {
            this.icon = { url: './assets/img/biomass.ico' };
             this.label = "";
        }
        if(this.label.includes("RSU"))
        {
            this.icon = { url: './assets/img/rsu.ico' };
             this.label = "";
        }
        if(this.label.includes("Biomasse liquide"))
        {
            this.icon = { url: './assets/img/biomass2.ico' };
             this.label = "";
        }
        if(this.label.includes("Olio combustibile"))
        {
            this.icon = { url: './assets/img/combOil.ico' };
             this.label = "";
        }
    }
}