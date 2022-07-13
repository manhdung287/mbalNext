import React, { useEffect, useState } from 'react'
import { UrlUserPrifle } from 'src/services/apiPath';
import { APIGet } from 'src/services/ProcessAPI';

interface IUser {
  address?: string
  avatar?: string
  phoneNumber?:string|number  
  consultantName: string
  consultantPhoneNum: string | number
  dateOfBirth?: string
  entryDate?: string | Date
}

function index() {
  const [data, setData] = useState<IUser>();

  useEffect(() => {
    const loadData = async () => {
      const request = await APIGet(UrlUserPrifle)
      if (request) {
        setData(request)
      }
    };
    loadData();
  },[])
  console.log(data)
  if(!data) return null;
  return (
    <div>
        
    </div>
  )
}

export default index