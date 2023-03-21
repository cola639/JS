const submitpDailyTable = tempDailyTable.map((item, index) =>
  Object.assign(
    {},
    {
      id: item.id,
      fileCount: item.fileCount,
      deductScore: item.deductScore,
      deptIds: item.deptIds
    }
  )
)
