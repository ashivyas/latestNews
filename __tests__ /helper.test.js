import {containerStyle,isCloseToBottom} from '../src/config/helper.js';

describe("containerStyle ", () =>{
  test('Should return valid style object when data length > 0', () => {
    let style = {flex: 1, justifyContent: 'center',alignItems: 'center'}
    expect(containerStyle([])).toEqual(style);
  })

  test('Should return empty style object when data length == 0', () => {
    expect(containerStyle([''])).toEqual({});
  })
})

describe("isCloseToBottom ", () =>{
  test('Should return true when at the bottom of the screen', () => {
    expect(
      isCloseToBottom({
        layoutMeasurement: {height:547.3333129882812},
        contentOffset: {x:0, y:2889},
        contentSize:{height: 3436.333251953125}
      })
    ).toEqual(true);
  })

  test('Should return false when not at the bottom of the screen', () => {
    expect(
      isCloseToBottom({
        layoutMeasurement: {height:1},
        contentOffset: {x:0, y:111},
        contentSize:{height: 336}
      })
    ).toEqual(false);
  })
})