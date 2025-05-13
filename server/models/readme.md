#lỗi (intermidate value ) is not inerable là một lỗi khi cố destructing một giá trị không phải là mảng
#nguyên nhân có thể là
đang sử dụng thư viện mysql ( bản thường ), mà :

# mysql.query() dùng callback thay vì promise

# không trả về [rows, fields] như mysql2/promise

#callback-> phiên bản mysql và promise-> phiên bản mysql2
#và khắc phục dùng :
a.Dùng util.promisify để chuyển db.query thành hàm promise

trong file db.js

```
const util = require('util');
db.query = util.promisify(db.query)
```

và cách 2 là
b.không dùng destructing:
const rows= await db.query("SELECT \* FROM users WHERE email = ?", [email]);
return rows[0];
