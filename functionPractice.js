/** 온디멘드 함수 ---> 특정 조건이 충족 되거나 트정 이벤트가 발생했을때 함수가 호출되어 실행하는 것
 * 사용자의 요청에만 따라서 코드가 실행됨
 *  이벤트리스너, 콜백함수, 타이머함수, 프로미스, async/ await
 */

function add(a, b) {
  const result = a + b;
  return result; //함수 종료, return문은 하나만 가능
}

add(3, 4);
add(5, 7);

// parseInt, toString()

// paseInt ---> 문자열을 숫자로 변경
let stringNum = "123";
let num = parseInt(stringNum, 10); //10진수로 파싱
console.log(num); //123

// toString()
let numberValue = 123;
let stringVal = numberValue.toString();
console.log(stringVal); // "123"
