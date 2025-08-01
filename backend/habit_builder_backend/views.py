from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class HomePageView(APIView):
    def get(self, request):
        return Response(
            {
                "message": "Welcome to the Habit-Builder API! This is a placeholder for your root URL.",
                "available_endpoints": [
                    "/admin/",
                    "/api/token/",
                    "/api/token/refresh/",
                ],
            },
            status=status.HTTP_200_OK,
        )
