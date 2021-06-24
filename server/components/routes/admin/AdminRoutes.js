import React from 'react'
import { Route } from "react-router-dom";
import ContentPage from "../../../components/moleculs/pages/ContentPage"
import UserDashboard from "../../moleculs/pages/admin/user/UserDashboard"
import CreateUserPage from "../../../components/moleculs/pages/admin/user/AddUser"
import UpdateUserPage from "../../../components/moleculs/pages/admin/user/UpdateUser"
import CategoryDashboard from '../../moleculs/pages/admin/category/CategoryDashboard';
import CreateCategoryPage from '../../moleculs/pages/admin/category/AddCategory';
import UpdateCategoryPage from '../../moleculs/pages/admin/category/UpdateCategory';
import BookDashboard from '../../moleculs/pages/admin/book/bookDashboard';
import CreateBookPage from '../../moleculs/pages/admin/book/AddBook';
import UpdateBookPage from '../../moleculs/pages/admin/book/UpdateBook';

export default function AdminRoutes() {
  return (
    <>
      <Route path="/news" exact component={ContentPage} />
      <Route path="/admin/users" exact component={UserDashboard} />
      <Route path="/admin/users/add" exact component={CreateUserPage} />
      <Route path="/admin/users/edit/:id" exact component={UpdateUserPage} />
      <Route path="/admin/categories" exact component={CategoryDashboard} />
      <Route path="/admin/categories/add" exact component={CreateCategoryPage} />
      <Route path="/admin/categories/edit/:id" exact component={UpdateCategoryPage} />
      <Route path="/admin/books" exact component={BookDashboard} />
      <Route path="/admin/books/add" exact component={CreateBookPage} />
      <Route path="/admin/books/edit/:id" exact component={UpdateBookPage} />

    </>
  )
}
