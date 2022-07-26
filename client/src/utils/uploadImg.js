export const checkImage = (file) => {
  const types = ['image/png', 'image/jpeg']
  let err = ''

  if (!file) return (err = 'File does not exist')
  if (file.size > 1024 * 1024) err = 'File size more 1mb'
  if (!types.includes(file.type)) err = 'Available types: png/jpeg'

  return err
}

export const imageUpload = async (file) => {
  const formData = new FormData()
  if (file) {
    formData.append('file', file)
    formData.append('upload_preset', 'enf70ecq')
    formData.append('cloud_name', 'siemens2021')

    const res = await (
      await fetch('https://api.cloudinary.com/v1_1/siemens2021/image/upload', {
        method: 'POST',
        body: formData,
      })
    ).json()

    return { public_id: res.public_id, url: res.secure_url }
  }
  return null
}
