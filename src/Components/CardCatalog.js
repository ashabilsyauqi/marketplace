
export default function CardCatalog({ data }) {
  return (
    <div className="card m-4 p-3 text-start" style={{ width: '15rem' }}>
      <img src={data.img} alt='gmabar' className="w-100"  style={{ height: ' 10rem' }} />
      <h5 className="card-title">{data.namaProduk}</h5>
      <p className="card-text">{data.desc}</p>

      <div className='d-flex justify-content-between'>
        <button className='btn btn-primary'>Pesan</button>

        <p className=" text-dark">
        Rp {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(data.harga)} ,-
      </p>
      </div>
 
    </div>
  );
}
