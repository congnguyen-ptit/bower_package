$(document).ready(function() {
    var table = $('#authors-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/users/authors/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'name', name: 'name' },
            { data: 'location', name: 'location' },
            { data: 'phone_number', name: 'phone_number' },
            { data: 'email', name: 'email' },
            { data: 'created_at', name: 'created_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#books-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/books/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'name', name: 'name' },
            { data: 'author', name: 'author' },
            { data: 'quantity', name: 'quantity' },
            { data: 'publisher', name: 'publisher' },
            { data: 'category', name: 'category' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#categories-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/categories/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'name', name: 'name' },
            { data: 'description', name: 'description' },
            { data: 'parent_id', name: 'parent_id' },
            { data: 'created_at', name: 'created_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#borrowed-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/borrower-records/borrowed/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'user', name: 'user' },
            { data: 'book', name: 'book' },
            { data: 'start_date', name: 'start_date' },
            { data: 'end_date', name: 'end_date' },
            { data: 'status', name: 'status' },
            { data: 'created_at', name: 'created_at' },
            { data: 'updated_at', name: 'updated_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#publishers-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/publishers/all",
        },
        columns: [
            { data: 'code', name: 'code' },
            { data: 'name', name: 'name' },
            { data: 'location', name: 'location' },
            { data: 'created_at', name: 'created_at' },
            { data: 'updated_at', name: 'updated_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#readers-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/users/readers/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'name', name: 'name' },
            { data: 'location', name: 'location' },
            { data: 'phone_number', name: 'phone_number' },
            { data: 'email', name: 'email' },
            { data: 'created_at', name: 'created_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#records-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/borrower-records/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'user', name: 'user' },
            { data: 'book', name: 'book' },
            { data: 'start_date', name: 'start_date' },
            { data: 'end_date', name: 'end_date' },
            { data: 'status', name: 'status' },
            { data: 'created_at', name: 'created_at' },
            { data: 'updated_at', name: 'updated_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#rejects-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/borrower-records/rejected/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'user', name: 'user' },
            { data: 'book', name: 'book' },
            { data: 'start_date', name: 'start_date' },
            { data: 'end_date', name: 'end_date' },
            { data: 'status', name: 'status' },
            { data: 'created_at', name: 'created_at' },
            { data: 'updated_at', name: 'updated_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#requests-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/borrower-records/request/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'user', name: 'user' },
            { data: 'book', name: 'book' },
            { data: 'start_date', name: 'start_date' },
            { data: 'end_date', name: 'end_date' },
            { data: 'status', name: 'status' },
            { data: 'created_at', name: 'created_at' },
            { data: 'updated_at', name: 'updated_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#returned-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/borrower-records/returned/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'user', name: 'user' },
            { data: 'book', name: 'book' },
            { data: 'start_date', name: 'start_date' },
            { data: 'end_date', name: 'end_date' },
            { data: 'status', name: 'status' },
            { data: 'created_at', name: 'created_at' },
            { data: 'updated_at', name: 'updated_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#roles-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/roles/all",
        },
        columns: [
            { data: 'id', name: 'id' },
            { data: 'name', name: 'name' },
            { data: 'description', name: 'description' },
            { data: 'created_at', name: 'created_at' },
            { data: 'action', name: 'action' },
        ]
    });
});
$(document).ready(function() {
    var table = $('#users-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/admin/users/all",
        },
        columns: [
            { data: 'code', name: 'code' },
            { data: 'name', name: 'name' },
            { data: 'location', name: 'location' },
            { data: 'phone_number', name: 'phone_number' },
            { data: 'email', name: 'email' },
            { data: 'created_at', name: 'created_at' },
            { data: 'action', name: 'action' },
        ]
    });
});

function likeBook(book_id) {
    $.ajax({
        type: 'GET',
        url: 'books/like/' + book_id,
        success: function() {
            location.reload();
        }
    })
};

function unlikeBook(book_id) {
    $.ajax({
        type: 'GET',
        url: 'books/unlike/' + book_id,
        success: function() {
            location.reload();
        }
    })
};

