const caseReason = [
  {
    label: '行政',
    value: '1',
    children: [
      // 2
      {
        label: '行政子',
        value: '3',
        children: [
          // 3
          {
            label: '行政孙',
            value: '4',
            children: [],
          },
        ],
      },
    ],
  },
  { label: '刑事', value: '2', children: [] },
]
const value = '4'

// 案由找寻父节点方法
function findParent(value) {
  let caseReasonList = JSON.parse(localStorage.getItem('caseReasonList'))
  let grandparentValue, fartherValue, grandsonValue

  for (let i = 0; i < caseReasonList.length; i++) {
    // set next start condition
    const caseReasonGrandparent = caseReasonList[i]['children']

    // operate
    grandparentValue = caseReasonList[i]['value']

    for (let j = 0; j < caseReasonGrandparent.length; j++) {
      // set next start condition
      const caseReasonFarther = caseReasonGrandparent[j]['children']

      // operate
      fartherValue = caseReasonGrandparent[j]['value']
      if (value === fartherValue) {
        return [grandparentValue]
      }

      for (let h = 0; h < caseReasonFarther.length; h++) {
        // set next start condition

        // operate
        grandsonValue = caseReasonFarther[h]['value']
        if (value === caseReasonFarther[h]['value']) {
          console.log(
            `grandparentValue, fartherValue, grandsonValue ${[
              grandparentValue,
              fartherValue,
              grandsonValue,
            ]}`
          )
          return [grandparentValue, fartherValue]
        }
      }
    }
  }
}
findParent(value)
