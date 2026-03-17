/**
 * 배열 내의 두 요소의 위치를 서로 바꿉니다. (Immutable Swap)
 */
export const swapItemsInArray = (array, index1, index2) =>
  array.map((item, index) =>
    index === index1 ? array[index2] : index === index2 ? array[index1] : item
  )

/**
 * 특정 인덱스의 요소를 제거한 새 배열을 반환합니다. (Immutable Remove)
 */
export const removeItemAtIndexInArray = (array, removeIndex) =>
  array.filter((_, index) => index !== removeIndex)

/**
 * 특정 인덱스에 새로운 요소를 삽입한 새 배열을 반환합니다. (Immutable Insert)
 */
export const insertItemAtIndexInArray = (array, insertIndex, item) => {
  const before = array.filter((_, index) => index < insertIndex)
  const after = array.filter((_, index) => index >= insertIndex)
  return [...before, item, ...after]
}