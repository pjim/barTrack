define('frontend/templates/bar-list', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 1
            },
            "end": {
              "line": 15,
              "column": 1
            }
          },
          "moduleName": "frontend/templates/bar-list.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	\n	 ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	 ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n     ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n     ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("add");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" //this will be fixed up later\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
          morphs[2] = dom.createAttrMorph(element0, 'src');
          return morphs;
        },
        statements: [
          ["content","result.name",["loc",[null,[11,5],[11,20]]]],
          ["content","result.snippet_text",["loc",[null,[12,5],[12,28]]]],
          ["attribute","src",["concat",[["get","result.Image_url",["loc",[null,[13,17],[13,33]]]]]]]
        ],
        locals: ["result"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/bar-list.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("this is the bar list route");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","search");
        var el2 = dom.createTextNode("\n	\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("please input your location");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("search for bars!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","results");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [5]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element1,3,3);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","barsearch",["loc",[null,[5,27],[5,36]]]]],[],[]]],["loc",[null,[5,1],[5,38]]]],
        ["element","action",["sendSearch"],[],["loc",[null,[6,9],[6,33]]]],
        ["block","each",[["get","model",["loc",[null,[9,9],[9,14]]]]],[],0,null,["loc",[null,[9,1],[15,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});