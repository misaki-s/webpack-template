// Default SortableJS
// const Sortable = require('Sortable');


// Core SortableJS (without default plugins)
// import Sortable from 'sortablejs/modular/sortable.core.esm.js';

// Complete SortableJS (with all plugins)
// import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

// var el = document.getElementById('items');
// // var sortable = Sortable.create(el);
// Sortable.mount(new MultiDrag());
// new Sortable(el, {
//     multiDrag: true, // Enable the plugin
//     selectedClass: "sortable-selected", // Class name for selected item
//     multiDragKey: null, // Key that must be down for items to be selected

//     // Called when an item is selected
//     onSelect: function (/**Event*/evt) {
//         evt.item // The selected item
//     },

//     // Called when an item is deselected
//     onDeselect: function (/**Event*/evt) {
//         evt.item // The deselected item
//     }
// });

// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";

// sub.jsに定義されたJavaScriptを実行する。
hello();