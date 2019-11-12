function pageFilter(arr, pageNum, pageSize) {
  pageNum = +pageNum;
  pageSize = +pageSize;
  const total = arr.length;
  const start = pageSize * (pageNum - 1);
  const end = start + pageSize <= total ? start + pageSize : total;
  const list = [];

  for (var i = start; i < end; i++) {
    list.push(arr[i]);
  }

  return {
    pageNum,
    total,
    pageSize,
    list
  }
}

module.exports = {
  pageFilter
};