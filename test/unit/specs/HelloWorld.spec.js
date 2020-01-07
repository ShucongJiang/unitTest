import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import axios from 'axios'
//一定要引入promise，不然会告诉你promise找不到
import Promise from 'es6-promise'

Promise.polyfill()
describe('HelloWorld.vue', () => {
  //钩子函数
  before(()=>{
    console.log(1);
  })
  after(()=>{
    console.log(2);
  })  
  beforeEach(() => {

  });

  // it.only("should render correct contents");


  const Constructor = Vue.extend(HelloWorld);
  const vm = new Constructor().$mount();
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })

  it('is m1 add two arguments', ()=>{
    const m1 = vm.m1;
    expect(m1(1, 2)).to.equal(3);  
  }
  )
  it('async m2 should return 4', ()=>{
    const m2 = vm.m2;
    m2(2,2, (data)=> {
      expect(m2(data)).to.equal(4);  
    })
  })
  it.only('接口被请求', ()=>{
    const getmes = vm.getmes;
    //spy, stub, mock
    // spy：是可以获取到对应函数的调用信息，但是不能屏蔽
    // stub：会拦截这个方法的调用
    let callback = sinon.stub(axios, 'get');
    let axiosSpy = sinon.spy(()=>{
      return 4
    });
    expect(getmes(axiosSpy)).to.equal(4);
    callback.restore();
  })
})
