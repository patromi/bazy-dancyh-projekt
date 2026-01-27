from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError, DatabaseError
from django.db.models import ProtectedError
from django.core.exceptions import ValidationError as DjangoValidationError


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        return response


    if isinstance(exc, ProtectedError):
        return Response(
            {
                "detail": "Nie można usunąć tego elementu, ponieważ jest używany przez inne obiekty.",
                "code": "protected_error",
                "protected_objects": [str(obj) for obj in exc.protected_objects]
            },
            status=status.HTTP_409_CONFLICT
        )

    if isinstance(exc, IntegrityError):
        return Response(
            {
                "detail": "Operacja narusza spójność danych (zduplikowany wpis lub powiązane dane).",
                "code": "integrity_error"
            },
            status=status.HTTP_409_CONFLICT
        )

    if isinstance(exc, DjangoValidationError):
        return Response(
            {
                "detail": exc.messages if hasattr(exc, 'messages') else str(exc),
                "code": "validation_error"
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    if isinstance(exc, DatabaseError):
        return Response(
            {"detail": "Wystąpił błąd bazy danych."},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )

    return None