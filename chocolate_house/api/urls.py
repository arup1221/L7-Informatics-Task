from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SeasonalFlavorViewSet, IngredientViewSet, CustomerSuggestionViewSet

router = DefaultRouter()

router.register(r'seasonal-flavors', SeasonalFlavorViewSet, basename='seasonal-flavor')
router.register(r'ingredients', IngredientViewSet, basename='ingredient')
router.register(r'customer-suggestions', CustomerSuggestionViewSet, basename='customer-suggestion')

urlpatterns = [
    path('', include(router.urls)),  
]
