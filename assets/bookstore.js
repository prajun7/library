'use strict';



;define("bookstore/Service/store", ["exports", "@ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/store"eaimeta@70e063a35619d71f
  class MyStore extends _store.default {}
  _exports.default = MyStore;
});
;define("bookstore/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("bookstore/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "bookstore/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"bookstore/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("bookstore/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("bookstore/components/add-book-modal", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@glimmer/tracking"], function (_exports, _component, _templateFactory, _component2, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- IN the template file, we can get those argument by using @title or @message --}}
  {{!-- We cannot call a function that is passed from one component to another directly 
  from the template. In Ember, we can only call functions that 
  are defined in the current component's JavaScript file from the template. --}}
  
  {{!-- If we need to call a function that is defined in a different component, 
  we should pass that function as an argument to the current 
  component and then call it from there.
  Here we are calling this.comfirm and this.cancel.
  We can get the other argrs that are not function by using @,
  that is @title or @message --}}
  
  <div class="my-modal-overlay">
    <div class="my-modal">
          <h1 class="header">{{@title}}</h1>
          <div class="message">{{@message}}</div>
          <div class="form-container">
            <Input 
              @type="text"
              @value={{this.title}}
              @class="input-field" 
              @id="titleInput" 
              placeholder="Title"
            /> 
            <Input 
              @type="text" 
              @value={{this.author}}  
              @class="input-field" 
              @id="authorInput" 
              placeholder="Author"
            />
            <Input 
              @type="text" 
              @value={{this.genre}}  
              @class="input-field" 
              @id="genreInput" 
              placeholder="Genre"
            />
            <Input 
              @type="number" 
              @value={{this.count}}  
              @id="countInput" 
              placeholder="Count"
            />
            <button 
              type="submit" 
              {{on "click" this.save}}
            >
              Save
            </button>
            <button 
              type="cancel" 
              {{on "click" this.cancel}}
            >
              Cancel
            </button>
        </div>
    </div>
  </div>
  */
  {
    "id": "aPPVBDZp",
    "block": "[[[1,\"\\n\"],[1,\"\\n\"],[10,0],[14,0,\"my-modal-overlay\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"my-modal\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"header\"],[12],[1,[30,1]],[13],[1,\"\\n        \"],[10,0],[14,0,\"message\"],[12],[1,[30,2]],[13],[1,\"\\n        \"],[10,0],[14,0,\"form-container\"],[12],[1,\"\\n          \"],[8,[39,0],[[24,\"placeholder\",\"Title\"]],[[\"@type\",\"@value\",\"@class\",\"@id\"],[\"text\",[30,0,[\"title\"]],\"input-field\",\"titleInput\"]],null],[1,\" \\n          \"],[8,[39,0],[[24,\"placeholder\",\"Author\"]],[[\"@type\",\"@value\",\"@class\",\"@id\"],[\"text\",[30,0,[\"author\"]],\"input-field\",\"authorInput\"]],null],[1,\"\\n          \"],[8,[39,0],[[24,\"placeholder\",\"Genre\"]],[[\"@type\",\"@value\",\"@class\",\"@id\"],[\"text\",[30,0,[\"genre\"]],\"input-field\",\"genreInput\"]],null],[1,\"\\n          \"],[8,[39,0],[[24,\"placeholder\",\"Count\"]],[[\"@type\",\"@value\",\"@id\"],[\"number\",[30,0,[\"count\"]],\"countInput\"]],null],[1,\"\\n          \"],[11,\"button\"],[24,4,\"submit\"],[4,[38,1],[\"click\",[30,0,[\"save\"]]],null],[12],[1,\"\\n            Save\\n          \"],[13],[1,\"\\n          \"],[11,\"button\"],[24,4,\"cancel\"],[4,[38,1],[\"click\",[30,0,[\"cancel\"]]],null],[12],[1,\"\\n            Cancel\\n          \"],[13],[1,\"\\n      \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@title\",\"@message\"],false,[\"input\",\"on\"]]",
    "moduleName": "bookstore/components/add-book-modal.hbs",
    "isStrictMode": false
  });
  /*
  We are pasing title, mesage, confirm function and cancel function from the 
  parent component.
  We can get those passed filed using, this.args.onConfirm() to call that method,
  or his.args.message to get the messag that we passed from the parent component.
  **/
  let MyModalComponent = (_class = class MyModalComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "title", _descriptor, this);
      _initializerDefineProperty(this, "author", _descriptor2, this);
      _initializerDefineProperty(this, "genre", _descriptor3, this);
      _initializerDefineProperty(this, "count", _descriptor4, this);
    }
    save() {
      const bookObj = {
        title: this.title,
        author: this.author,
        genre: this.genre,
        count: this.count
      };
      // console.log(this.args.message);  
      // logs the message that is passed from parent component
      this.args.onSave(bookObj);
      this.args.onCancel();
    }
    cancel() {
      this.title = '';
      this.author = '';
      this.genre = '';
      this.count = 0;
      this.args.onCancel();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "author", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "genre", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "count", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "save", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cancel"), _class.prototype)), _class);
  _exports.default = MyModalComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MyModalComponent);
});
;define("bookstore/components/book-editor", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object", "bookstore/models/book"], function (_exports, _component, _templateFactory, _component2, _service, _object, _book) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"bookstore/models/book"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1 class="sub-header">{{this.updateBookTitle}}</h1>
    <div class="form-container">
      <Input 
        @type="text"
        @value={{mut @model.title}}
        @class="input-field" 
        @id="titleInput" 
        placeholder="Title"
      /> 
      <Input 
        @type="text" 
        @value={{mut @model.author}}  
        @class="input-field" 
        @id="authorInput" 
        placeholder="Author"
      />
      <Input 
        @type="text" 
        @value={{mut @model.genre}}
        @class="input-field" 
        @id="genreInput" 
        placeholder="Genre"
      />
      <Input 
        @type="number" 
        @value={{mut @model.count}}  
        @id="countInput" 
        placeholder="Count"
      />
      <button 
        type="submit" 
        {{on "click" this.updateBook}}
      >
        Update
      </button>
      <button 
        type="cancel" 
        {{on "click" this.cancel}}
      >
        Cancel
      </button>
  </div>
  */
  {
    "id": "7B7jx9ul",
    "block": "[[[10,\"h1\"],[14,0,\"sub-header\"],[12],[1,[30,0,[\"updateBookTitle\"]]],[13],[1,\"\\n  \"],[10,0],[14,0,\"form-container\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,\"placeholder\",\"Title\"]],[[\"@type\",\"@value\",\"@class\",\"@id\"],[\"text\",[28,[37,1],[[30,1,[\"title\"]]],null],\"input-field\",\"titleInput\"]],null],[1,\" \\n    \"],[8,[39,0],[[24,\"placeholder\",\"Author\"]],[[\"@type\",\"@value\",\"@class\",\"@id\"],[\"text\",[28,[37,1],[[30,1,[\"author\"]]],null],\"input-field\",\"authorInput\"]],null],[1,\"\\n    \"],[8,[39,0],[[24,\"placeholder\",\"Genre\"]],[[\"@type\",\"@value\",\"@class\",\"@id\"],[\"text\",[28,[37,1],[[30,1,[\"genre\"]]],null],\"input-field\",\"genreInput\"]],null],[1,\"\\n    \"],[8,[39,0],[[24,\"placeholder\",\"Count\"]],[[\"@type\",\"@value\",\"@id\"],[\"number\",[28,[37,1],[[30,1,[\"count\"]]],null],\"countInput\"]],null],[1,\"\\n    \"],[11,\"button\"],[24,4,\"submit\"],[4,[38,2],[\"click\",[30,0,[\"updateBook\"]]],null],[12],[1,\"\\n      Update\\n    \"],[13],[1,\"\\n    \"],[11,\"button\"],[24,4,\"cancel\"],[4,[38,2],[\"click\",[30,0,[\"cancel\"]]],null],[12],[1,\"\\n      Cancel\\n    \"],[13],[1,\"\\n\"],[13]],[\"@model\"],false,[\"input\",\"mut\",\"on\"]]",
    "moduleName": "bookstore/components/book-editor.hbs",
    "isStrictMode": false
  });
  let BookComponent = (_class = class BookComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "router", _descriptor, this);
      _defineProperty(this, "updateBookTitle", "Update Book");
    }
    updateBook() {
      const paramId = this.args.model.id;
      const bookObj = {
        id: paramId,
        title: this.args.model.title,
        author: this.args.model.author,
        genre: this.args.model.genre,
        count: this.args.model.count
      };
      fetch('http://localhost:9090/book/' + paramId, {
        method: 'POST',
        body: JSON.stringify(bookObj),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(res => {
        this.args.model.id = res.id;
        this.clear();
        this.router.transitionTo('index');
        return new _book.default(res);
      }).catch(err => console.log(err));
    }
    cancel() {
      this.router.transitionTo("index");
    }
    clear() {
      this.args.model.title = '';
      this.args.model.author = '';
      this.args.model.genre = '';
      this.args.model.count = 0;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateBook", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateBook"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cancel"), _class.prototype)), _class);
  _exports.default = BookComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, BookComponent);
});
;define("bookstore/components/confirm-modal", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- IN the template file, we can get those argument by using @title or @message --}}
  {{!-- We cannot call a function that is passed from one component to another directly 
  from the template. In Ember, we can only call functions that 
  are defined in the current component's JavaScript file from the template. --}}
  
  {{!-- If we need to call a function that is defined in a different component, 
  we should pass that function as an argument to the current 
  component and then call it from there.
  Here we are calling this.comfirm and this.cancel. --}}
  
  <div class="my-modal-overlay">
    <div class="my-modal">
      <h2>{{@title}}</h2>
      <p>{{@message}}</p>
      <button type="submit" {{on "click" this.confirm}}>Confirm</button>
      <button type="cancel" {{on "click" this.cancel}}>Cancel</button>
    </div>
  </div>
  */
  {
    "id": "sfiR0TmM",
    "block": "[[[1,\"\\n\"],[1,\"\\n\"],[10,0],[14,0,\"my-modal-overlay\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"my-modal\"],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,[30,1]],[13],[1,\"\\n    \"],[10,2],[12],[1,[30,2]],[13],[1,\"\\n    \"],[11,\"button\"],[24,4,\"submit\"],[4,[38,0],[\"click\",[30,0,[\"confirm\"]]],null],[12],[1,\"Confirm\"],[13],[1,\"\\n    \"],[11,\"button\"],[24,4,\"cancel\"],[4,[38,0],[\"click\",[30,0,[\"cancel\"]]],null],[12],[1,\"Cancel\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@title\",\"@message\"],false,[\"on\"]]",
    "moduleName": "bookstore/components/confirm-modal.hbs",
    "isStrictMode": false
  });
  /*
  We are pasing title, mesage, confirm function and cancel function from the 
  parent component.
  We can get those passed filed using, this.args.onConfirm() to call that method,
  or this.args.message to get the message that we passed from the parent component.
  **/
  let MyModalComponent = (_class = class MyModalComponent extends _component2.default {
    confirm() {
      this.args.onConfirm();
    }
    cancel() {
      this.args.onCancel();
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "confirm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "confirm"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cancel"), _class.prototype)), _class);
  _exports.default = MyModalComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MyModalComponent);
});
;define("bookstore/components/row", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@glimmer/tracking"], function (_exports, _component, _templateFactory, _component2, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- We can get the arguments that we are passing from the parent component
   to the child component by using @, that is @book.title or @book.id 
   If we are passing the function than we need to declare that function again
   in the controller of the child component and we can use here --}}
  
  <tr>
      <td>{{@book.title}}</td>
      <td>{{@book.author}}</td>
      <td>{{@book.genre}}</td>
      <td>{{@book.count}}</td>
  
      <td>
          <LinkTo class="update-btn" @route="book" @model={{@book.id}} reload=true>Update</LinkTo>
      </td>
      <td>
          <button class="delete-btn" {{on "click" this.showModal}}>Delete</button>
      </td>
  </tr>
  
  {{#if this.deleteModal}}
    <ConfirmModal
      @title="Confirm Delete"
      @message="Are you sure you want to delete this item?"
      @onConfirm={{fn this.deleteBook}}
      @onCancel={{fn this.hideModal}}
    />
  {{/if}}
  */
  {
    "id": "pq+LESYG",
    "block": "[[[1,\"\\n\"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,[30,1,[\"title\"]]],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,[30,1,[\"author\"]]],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,[30,1,[\"genre\"]]],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,[30,1,[\"count\"]]],[13],[1,\"\\n\\n    \"],[10,\"td\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,0,\"update-btn\"],[24,\"reload\",\"true\"]],[[\"@route\",\"@model\"],[\"book\",[30,1,[\"id\"]]]],[[\"default\"],[[[[1,\"Update\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n        \"],[11,\"button\"],[24,0,\"delete-btn\"],[4,[38,1],[\"click\",[30,0,[\"showModal\"]]],null],[12],[1,\"Delete\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"deleteModal\"]],[[[1,\"  \"],[8,[39,3],null,[[\"@title\",\"@message\",\"@onConfirm\",\"@onCancel\"],[\"Confirm Delete\",\"Are you sure you want to delete this item?\",[28,[37,4],[[30,0,[\"deleteBook\"]]],null],[28,[37,4],[[30,0,[\"hideModal\"]]],null]]],null],[1,\"\\n\"]],[]],null]],[\"@book\"],false,[\"link-to\",\"on\",\"if\",\"confirm-modal\",\"fn\"]]",
    "moduleName": "bookstore/components/row.hbs",
    "isStrictMode": false
  });
  /*
  The row.js is a component which is being called from index.hbs
  The component are reuseable by other template as well.
  The code logic is in row.js file while the view part is in row.hbs file.
  **/
  let BookComponent = (_class = class BookComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "deleteModal", _descriptor, this);
    }
    showModal() {
      this.deleteModal = true;
    }
    hideModal() {
      this.deleteModal = false;
    }
    deleteBook() {
      fetch('http://localhost:9090/book/' + this.args.book.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        this.args.model.removeObject(this.args.book);
      }).catch(err => console.log(err));
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "deleteModal", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "showModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "hideModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteBook", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteBook"), _class.prototype)), _class);
  _exports.default = BookComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, BookComponent);
});
;define("bookstore/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("bookstore/controllers/application", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f
  /*
  We can use the controller class to add the action that we want to happen
  when we click some button in the template file.
  The name of the controller file, route file and template file should match.
  **/
  class ApplicationComponent extends _controller.default {}
  _exports.default = ApplicationComponent;
});
;define("bookstore/controllers/index", ["exports", "@ember/controller", "@ember/object", "@glimmer/tracking", "bookstore/models/book"], function (_exports, _controller, _object, _tracking, _book) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@glimmer/tracking",0,"bookstore/models/book"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let IndexComponent = (_class = class IndexComponent extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "addModal", _descriptor, this);
    }
    showModal() {
      this.addModal = true;
    }
    hideModal() {
      this.addModal = false;
    }
    addBook(bookObj) {
      fetch('http://localhost:9090/book', {
        method: 'POST',
        body: JSON.stringify(bookObj),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(res => {
        const newBook = new _book.default(res);
        console.log("this.model in Controller in index.js");
        if (!this.model.books) {
          console.log("undefined");
          this.model.books = A();
        }
        console.log(this);
        this.model.books.pushObject(newBook);
        // Push the new book to this.model array
        // Since in the index.js router file we are returning arrays of data from models,
        // we need to use this.model.books not just this.model
        // we are pushing it to the array, so that we can show it on frontend without 
        // hitting the database.
        return new _book.default(res);
      }).catch(err => console.log(err));
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "addModal", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "showModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "hideModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addBook", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addBook"), _class.prototype)), _class);
  _exports.default = IndexComponent;
});
;define("bookstore/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/app-version", ["exports", "@ember/component/helper", "bookstore/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"bookstore/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("bookstore/helpers/dateConverter", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f
  /**
   * We can use the helper in the template.hbs files.
   * we can create helper like equal which check if two params are equal or not.
   * We can use this equal helper by doing,
   * {{#if (eq this.book.id 4)}}
   *      Do something
   * {{/if}}
   */
  const monthMap = new Map([["01", "January"], ["02", "Febuary"], ["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"], ["07", "July"], ["08", "August"], ["09", "September"], ["10", "October"], ["11", "Novemeer"], ["12", "December"]]);
  function dateConverter(_ref) {
    let [publishedDate] = _ref;
    if (publishedDate) {
      let [year, month, day] = publishedDate.substring(0, 10).split("-");
      return monthMap.get(month) + " " + day + " " + year;
    }
  }
  var _default = (0, _helper.helper)(dateConverter);
  _exports.default = _default;
});
;define("bookstore/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _eq.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/ex", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f
  function ex(_ref) {
    let [start, end, string] = _ref;
    if (start && end && string) {
      return string.substring(start, end);
    }
  }
  var _default = (0, _helper.helper)(ex);
  _exports.default = _default;
});
;define("bookstore/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEq.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("bookstore/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("bookstore/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("bookstore/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("bookstore/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("bookstore/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "bookstore/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"bookstore/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("bookstore/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("bookstore/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("bookstore/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("bookstore/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("bookstore/models/book", ["exports", "@glimmer/tracking"], function (_exports, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let Book = (_class = class Book {
    constructor() {
      let o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        id: 0,
        title: '',
        author: '',
        genre: '',
        count: 0
      };
      _initializerDefineProperty(this, "id", _descriptor, this);
      _initializerDefineProperty(this, "title", _descriptor2, this);
      _initializerDefineProperty(this, "author", _descriptor3, this);
      _initializerDefineProperty(this, "genre", _descriptor4, this);
      _initializerDefineProperty(this, "count", _descriptor5, this);
      this.id = o.id;
      this.title = o.title;
      this.author = o.author;
      this.genre = o.genre;
      this.count = o.count;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "title", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "author", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "genre", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "count", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = Book;
});
;define("bookstore/router", ["exports", "@ember/routing/router", "bookstore/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"bookstore/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                             * This file stores all the route.
                                                                                                                                                                                                                                                                                                                                                                                             */
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route("book", {
      path: 'book/:book_id'
    });
    this.route("error", {
      path: "*path"
    });
  });
});
;define("bookstore/routes/book", ["exports", "@ember/routing/route", "bookstore/models/book"], function (_exports, _route, _book) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"bookstore/models/book"eaimeta@70e063a35619d71f
  /*
  Similar to index.js route, the book.js file also acts like the useEffect with
  empty array.
  
  When we go to the 
    this.route("book", {path:'book/:book_id'})
  which is defined in router.js file, 
  Then the book.js router file kicks off and it makes the call to the backend
  and returns the data in the model.
  We can access that data form the book.hbs template file by doing 
  {{this.model}}
  **/
  class BookRoute extends _route.default {
    async model(params) {
      if (params.book_id > 0) {
        const response = await fetch('http://localhost:9090/book/' + params.book_id);
        const data = await response.json();
        const book = new _book.default(data);
        return book;
      }
      return new _book.default();
    }
  }
  _exports.default = BookRoute;
});
;define("bookstore/routes/index", ["exports", "@ember/routing/route", "@ember/array", "bookstore/models/book", "@glimmer/tracking"], function (_exports, _route, _array, _book, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class2, _descriptor;
  /*
  Route files are like useEffect() from React,
  Whenever we go to this page it automatically runs the model only once and get the
  data from the backend.
  Just like useEffect with empty array, []
  
  Inside the model we need to return the data which we get from the backend.
  This data can be used by index.hbs file which is in template folder by 
  doing {{this.model}}.
  The name of the file in route and template should always match.
  If we want to have some action of methods in template file we need to 
  define those in controller folder and the name of the file should also be 
  index.js.
  
  That is the name of the file for route, template and controller should match.
  **/
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/array",0,"bookstore/models/book",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let _class = (_class2 = class _class2 extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "books", _descriptor, this);
    }
    async model() {
      try {
        const response = await fetch('http://localhost:9090/books');
        if (response.ok) {
          const data = await response.json();
          const dataMap = data.map(o => new _book.default(o));
          this.books = (0, _array.A)(dataMap);
          return {
            books: this.books
          };
          // Return the array as a value in an object
        } else {
          throw new Error('Error fetching books: ' + response.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "books", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)();
    }
  })), _class2);
  /**
   * From the model we are returning the array of objects by doing, return { books: this.books }; 
   * We want to track the books array, so that we can add the new book to that array.
   * This will prevent us from refershing the page every time we add the new book.
   * If we don't push the new book into the addBook() function in index.js controller file
   * we have to refresh the page to see the newly added book.
   */
  _exports.default = _class;
});
;define("bookstore/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("bookstore/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("bookstore/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("bookstore/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("bookstore/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("bookstore/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("bookstore/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("bookstore/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Application.hbs template stays in every page.
  In this app, the Book Store heading is in every page.--}}
  
  {{!-- The application.hbs template in Ember serves as the starting point 
  or entry point for your application, similar to the App component in React.
  The application.hbs template is the top-level template that defines 
  the overall layout for your entire Ember application. 
  It typically includes common elements such as headers, footers, navigation bars, 
  and other UI elements that are shared across multiple pages or routes in your app. --}}
  
  <div>
     <LinkTo @route="index"><h1 class="header">Book Store</h1></LinkTo> 
     <div class="spacer"></div>
  </div>
  
  <div class="container">
      {{outlet}}
  </div>
  
  {{!-- In Ember.js, the {{outlet}} is a placeholder that allows us to 
  define where child routes and their corresponding templates will
  be rendered in the parent template. It is used in conjunction 
  with the Ember Router to dynamically render content based on 
  the current URL and route. --}}
  
  
  
  */
  {
    "id": "PgqBQr2S",
    "block": "[[[1,\"\\n\"],[1,\"\\n\"],[10,0],[12],[1,\"\\n   \"],[8,[39,0],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[10,\"h1\"],[14,0,\"header\"],[12],[1,\"Book Store\"],[13]],[]]]]],[1,\" \\n   \"],[10,0],[14,0,\"spacer\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[1,\"\\n\\n\"]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "bookstore/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("bookstore/templates/book", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- When we click the Update button, it displays the book.hbs template.
  The book.hbs template is related to the book.js file in the route folder.
  When we click the update button, it calls the book.js file of the router folder and 
  returns the model. The model consists of the specific data which we can use by
  using {{this.model}} --}}
  
  {{!-- Here this tempalte is calling the BookEditor component which takes the content "Update"
  and the model. --}}
  
  {{!-- Since we are using BookEditor component to update and add book, we have the content argument. --}}
  
  <BookEditor @model={{this.model}}/>
  
  */
  {
    "id": "EQouy/3n",
    "block": "[[[1,\"\\n\"],[1,\"\\n\"],[1,\"\\n\"],[8,[39,0],null,[[\"@model\"],[[30,0,[\"model\"]]]],null],[1,\"\\n\"]],[],false,[\"book-editor\"]]",
    "moduleName": "bookstore/templates/book.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("bookstore/templates/error", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- When we go to any other path which are not defined in the 
  router.js file we throw the Erro 404 message. --}}
  
  <div class="message">Error 404</div>
  */
  {
    "id": "sPI8T0qn",
    "block": "[[[1,\"\\n\"],[10,0],[14,0,\"message\"],[12],[1,\"Error 404\"],[13]],[],false,[]]",
    "moduleName": "bookstore/templates/error.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("bookstore/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- The index.hbs template is teh home page, that is http://localhost:4200/
  This page gets loaded at the beggining when we go to, http://localhost:4200/
  We don't need to add any route in the router.js file to define this page.
  So this page is the home page or landing page.
  Here in our app, the table and update, delete button are displayed from this page. --}}
  
  {{!-- Here we need to use this.model.books instead of just this.model because in 
  index.js router file we are returning object inside the model.
  The model can return the object of different data that we get from database.--}}
  
  <button class="add-btn" {{on "click" this.showModal}}>Add Book</button>
  
  {{#if this.model.books.length}}
    <table>
      <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Count</th>
          <th></th>
          <th></th>
      </tr>
  
      {{!-- Here we are calling the Row component which takes the current book
       and list of all the books --}}
      {{#each this.model.books as |book|}}
        <Row @book={{book}} @model={{this.model.books}} />
      {{/each}}
  </table>
  {{else}}
    <div class="message">
      This app is using H2 database.<br>
      Start by adding some book.
    </div>
  {{/if}}
  
  {{#if this.addModal}}
    <AddBookModal
      @title="Add Book"
      @message="Start adding your book here"
      @onSave={{fn this.addBook}}
      @onCancel={{fn this.hideModal}}
    />
  {{/if}}
  
  {{!-- We are calling a component called Row, which renders each row of the book.
  To that Row component we are passing each book, and the this.model. --}}
  */
  {
    "id": "H2IGQCCM",
    "block": "[[[1,\"\\n\"],[1,\"\\n\"],[11,\"button\"],[24,0,\"add-btn\"],[4,[38,0],[\"click\",[30,0,[\"showModal\"]]],null],[12],[1,\"Add Book\"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"model\",\"books\",\"length\"]],[[[1,\"  \"],[10,\"table\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"th\"],[12],[1,\"Title\"],[13],[1,\"\\n        \"],[10,\"th\"],[12],[1,\"Author\"],[13],[1,\"\\n        \"],[10,\"th\"],[12],[1,\"Genre\"],[13],[1,\"\\n        \"],[10,\"th\"],[12],[1,\"Count\"],[13],[1,\"\\n        \"],[10,\"th\"],[12],[13],[1,\"\\n        \"],[10,\"th\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"model\",\"books\"]]],null]],null],null,[[[1,\"      \"],[8,[39,4],null,[[\"@book\",\"@model\"],[[30,1],[30,0,[\"model\",\"books\"]]]],null],[1,\"\\n\"]],[1]],null],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[10,0],[14,0,\"message\"],[12],[1,\"\\n    This app is using H2 database.\"],[10,\"br\"],[12],[13],[1,\"\\n    Start by adding some book.\\n  \"],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"],[41,[30,0,[\"addModal\"]],[[[1,\"  \"],[8,[39,5],null,[[\"@title\",\"@message\",\"@onSave\",\"@onCancel\"],[\"Add Book\",\"Start adding your book here\",[28,[37,6],[[30,0,[\"addBook\"]]],null],[28,[37,6],[[30,0,[\"hideModal\"]]],null]]],null],[1,\"\\n\"]],[]],null],[1,\"\\n\"]],[\"book\"],false,[\"on\",\"if\",\"each\",\"-track-array\",\"row\",\"add-book-modal\",\"fn\"]]",
    "moduleName": "bookstore/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("bookstore/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("bookstore/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("bookstore/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("bookstore/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('bookstore/config/environment', [], function() {
  var prefix = 'bookstore';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("bookstore/app")["default"].create({"name":"bookstore","version":"0.0.0+77f26e61"});
          }
        
//# sourceMappingURL=bookstore.map
