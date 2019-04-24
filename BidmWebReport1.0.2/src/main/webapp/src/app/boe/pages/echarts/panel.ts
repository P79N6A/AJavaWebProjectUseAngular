export class Panel {
    header: string = "";
    clazz: string = "ui-g-6 ui-md-4 ui-lg-3";
    display: string = "block";
    icon: string = "fullscreen";
    private _options;
    id;
    expand: boolean = false;
    private _img: string = "";
    private _option_path: string;

    author: string;
    author_site: string;

    constructor(header: string) {
        this.header = header;
        // this.id = new Date().getTime();
        let idx: string = localStorage.getItem('echart_idx');
        // console.log(idx);
        if (idx === null) {
            localStorage.setItem('echart_idx', "1");
            this.id = "echart-demo-1";
        } else {
            let tmp: number = Number.parseInt(idx) + 1;
            localStorage.setItem('echart_idx', tmp.toString());
            this.id = "echart-demo-" + tmp.toString();
        }
    }

    get img() {
        return this._img;
    }

    get options() {
        return this._options;
    }

    get path() {
        return this._option_path;
    }

    setOptions(option) {
        this._options = option;
    }

    set echartOption(path: string) {
        this._option_path = path;

        this._img = "assets/boe/echarts/" + path + "/thumbnail.png";
    }
}
