from django.http import JsonResponse


def TestView(request):
    return JsonResponse({"message": "Unavailable"})
