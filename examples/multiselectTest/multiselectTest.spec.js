import MultiselectTestModule from './multiselectTest'
import MultiselectTestController from './multiselectTest.controller';
import MultiselectTestComponent from './multiselectTest.component';
import MultiselectTestTemplate from './multiselectTest.html';

describe('MultiselectTest', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MultiselectTestModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MultiselectTestController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MultiselectTestTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MultiselectTestComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MultiselectTestTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MultiselectTestController);
      });
  });
});
