import React from 'react'

function Detail({data}:any) {
  console.log(data)
  return (
    <div>Detail</div>
  )
}
Detail.getInitialProps = async ({ query }: any) => {
  return {
    data: query.dbid
  }
}

export default Detail;
