import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
    selector: 'app-warning',
    template: 
    '<p> This s a warning, your are in danger! </p>'
    ,
    styles: [
        'p { padding: 20px; background-color: mistyrose; border: 1px solid red;}'

    ]
})
export class WarningComponent implements OnInit{
    constructor() { }

    ngOnInit() {
    }
}


