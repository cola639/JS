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

function findParent(value) {
  let grandValue, fartherValue, childValue
  for (let i = 0; i < caseReason.length; i++) {
    grandValue = caseReason[i]['value']
    const caseReasonChild = caseReason[i]['children']
    if (!caseReasonChild.length) break
    console.log(caseReasonChild)

    for (let j = 0; j < caseReasonChild.length; j++) {
      fartherValue = caseReasonChild[j]['value']
      const caseReasonGrand = caseReasonChild[j]['children']
      if (!caseReasonGrand.length) break
      console.log(caseReasonGrand)

      if (value === caseReasonGrand[0]['value']) {
        childValue = caseReasonGrand[0]['value']
        return console.log(grandValue, fartherValue, childValue)
      }
    }
  }
}
findParent(value)
