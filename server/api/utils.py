from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is None and isinstance(exc, IntegrityError):
        return Response(
            {
                "detail": "Nie można wykonać tej operacji, ponieważ narusza ona spójność danych (np. istnieją powiązane obiekty).",
                "code": "db_integrity_error"
            },
            status=status.HTTP_409_CONFLICT
        )

    return response