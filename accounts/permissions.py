from rest_framework import permissions

class isUserOrReadOnly(permissions.BasePermission): #  A base class from which all permission classes should inherit.
     def has_object_permission(self, request, view, obj): # Return `True` if permission is granted, `False` otherwise.
        if request.method in permissions.SAFE_METHODS:
            return True

        if request.user == obj.user or request.user.is_superuser:
            return True