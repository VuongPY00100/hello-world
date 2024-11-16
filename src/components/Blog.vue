<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Đăng bài viết</h1>

    <form class="border p-4 shadow-sm rounded bg-light">
      <div class="mb-3">
        <label class="form-label">Mã bài viết</label>
        <input type="text" class="form-control" placeholder="Nhập mã bài viết">
      </div>
      <div class="mb-3">
        <label class="form-label">Tiêu đề</label>
        <input type="text" class="form-control" placeholder="Nhập tiêu đề">
      </div>
      <div class="mb-3">
        <label class="form-label">Nội dung</label>
        <textarea rows="4" class="form-control" placeholder="Nhập nội dung"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Hình ảnh</label>
        <input type="file" class="form-control">
      </div>

      <div class="d-flex gap-2 mt-4">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-warning">Sửa</button>
        <button type="button" class="btn btn-danger">Xóa</button>
      </div>
    </form>

    <hr class="my-5">

    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>Mã bài viết</th>
          <th>Tiêu đề</th>
          <th>Nội dung</th>
          <th>Hình ảnh</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>00000</td>
          <td>Tiêu đề mẫu</td>
          <td>Nội dung mẫu</td>
          <td>Hình ảnh mẫu</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BlogPage"
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
