export const Orders = () => {
  return (
    <div className=''>
      {<div></div>}
      <div className=''>
        <table className=''>
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className=''>
              <td>
                <a href='#' className=''>
                  1
                </a>
              </td>
              <td>Paid</td>
              <td>Dec 12 2021</td>
              <td>$234</td>
            </tr>
            <tr className=''>
              <td>
                <a href='#' className=''>
                  2
                </a>
              </td>
              <td>Not Paid</td>
              <td>Dec 12 2021</td>
              <td>$34</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
