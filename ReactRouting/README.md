# 📘 README.md

````markdown
# ⚡ React Router DOM (Nested Routes, Outlet, Relative vs Absolute Path)

---

## 🚀 Routes ka Structure

- Har `Route` ek **path** define karta hai.
- Agar ek route ke andar nested routes likhe ho to unka content **Outlet** ke andar render hota hai.

### Example:

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```
````

- `/dashboard` → parent route hai.
- `profile` aur `settings` → child routes hain.
- Child components sirf tab dikhenge jab parent component ke andar `<Outlet />` ho.

---

## 🧩 Outlet Kaha Lagana Hai?

- Outlet **hamesha parent component ke andar** lagana hai jaha tum child components dikhana chahte ho.

👉 Example (`Dashboard.jsx`):

```jsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Profile aur Settings yaha render honge */}
    </div>
  );
}
```

---

## 🔗 Relative vs Absolute Path

### Relative Path

```jsx
<Link to="profile">Profile</Link>
```

- Ye current parent route ke relative hota hai.
- Agar tum `/dashboard` par ho, ye `/dashboard/profile` banega ✅
- Agar tum `/` (home) par ho, ye `/profile` banega ❌ (aur route exist nahi karega).

### Absolute Path

```jsx
<Link to="/dashboard/profile">Profile</Link>
```

- Ye root se start hota hai.
- Kahin bhi ho, ye hamesha `/dashboard/profile` kholega ✅

---

## ❌ Confusion Example

Tumne Home page par ye likha tha:

```jsx
<Link to="profile">Profile</Link>
```

- Isne URL banaya `/profile` (jo exist nahi tha).
- Tum expect kar rahe the `/dashboard/profile`.

### ✅ Solution

```jsx
<Link to="/dashboard/profile">Profile</Link>
<Link to="/dashboard/settings">Settings</Link>
```

---

## 🛠 Nested Routes Banane ka Tarika

1. Parent route define karo (`/dashboard`).
2. Uske andar children likho.
3. Parent component me `<Outlet />` lagao.

### Example (App.jsx):

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

### Example (Dashboard.jsx):

```jsx
<div>
  <h1>Dashboard</h1>
  <Outlet /> {/* Profile aur Settings yaha render honge */}
</div>
```

---

## ✅ Important Points

1. **Outlet** hamesha parent component ke andar lagana hai.
2. **Relative path** tabhi likho jab tum parent ke andar ho.

   - Example: Dashboard ke andar → `<Link to="profile">`

3. **Absolute path** use karo jab tum parent ke bahar ho.

   - Example: Home page → `<Link to="/dashboard/profile">`

4. Agar page open nahi ho raha:

   - Route sahi define kiya hai?
   - Path sahi (relative/absolute)?
   - Outlet lagaya hai ya nahi?

---

## 🎯 Golden Rule

- **Parent ke andar ho → relative**
- **Parent ke bahar ho → absolute**

---
