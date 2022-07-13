import SEOWrapper from 'lib/SEOWrapper';
import React from 'react'

function Detail({ data }: any) {

  return (
    <>
      <SEOWrapper images={[{ url: '', width: 500, height: 600 }]} title='title web' description='new des' />
      <div>Detail</div>
    </>
  )
}
Detail.getInitialProps = async ({ query }: any) => {
  return {
    data: query.dbid
  }
}

export default Detail;
