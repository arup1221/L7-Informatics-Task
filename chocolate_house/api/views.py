from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from .models import SeasonalFlavor, Ingredient, CustomerSuggestion
from .serializers import SeasonalFlavorSerializer, IngredientSerializer, CustomerSuggestionSerializer
from rest_framework import viewsets


################################################# Seasonal Flavor API #################################################

class SeasonalFlavorViewSet(viewsets.ViewSet):
    
    def list(self, request):
        flavors = SeasonalFlavor.objects.all()
        serializer = SeasonalFlavorSerializer(flavors, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = SeasonalFlavorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            flavor = SeasonalFlavor.objects.get(pk=pk)
        except SeasonalFlavor.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SeasonalFlavorSerializer(flavor)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            flavor = SeasonalFlavor.objects.get(pk=pk)
        except SeasonalFlavor.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SeasonalFlavorSerializer(flavor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        try:
            flavor = SeasonalFlavor.objects.get(pk=pk)
        except SeasonalFlavor.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SeasonalFlavorSerializer(flavor, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            flavor = SeasonalFlavor.objects.get(pk=pk)
        except SeasonalFlavor.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        flavor.delete()
        return Response({"detail": "Deleted successfully"}, status=status.HTTP_204_NO_CONTENT)


################################################# Ingredient API #################################################

class IngredientViewSet(viewsets.ViewSet):
    
    def list(self, request):
        ingredients = Ingredient.objects.all()
        serializer = IngredientSerializer(ingredients, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = IngredientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            ingredient = Ingredient.objects.get(pk=pk)
        except Ingredient.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = IngredientSerializer(ingredient)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            ingredient = Ingredient.objects.get(pk=pk)
        except Ingredient.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = IngredientSerializer(ingredient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        try:
            ingredient = Ingredient.objects.get(pk=pk)
        except Ingredient.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = IngredientSerializer(ingredient, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            ingredient = Ingredient.objects.get(pk=pk)
        except Ingredient.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        ingredient.delete()
        return Response({"detail": "Deleted successfully"}, status=status.HTTP_204_NO_CONTENT)


################################################# Customer Suggestion API #################################################

class CustomerSuggestionViewSet(viewsets.ViewSet):
    
    def list(self, request):
        suggestions = CustomerSuggestion.objects.all()
        serializer = CustomerSuggestionSerializer(suggestions, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = CustomerSuggestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            suggestion = CustomerSuggestion.objects.get(pk=pk)
        except CustomerSuggestion.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CustomerSuggestionSerializer(suggestion)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            suggestion = CustomerSuggestion.objects.get(pk=pk)
        except CustomerSuggestion.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CustomerSuggestionSerializer(suggestion, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        try:
            suggestion = CustomerSuggestion.objects.get(pk=pk)
        except CustomerSuggestion.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CustomerSuggestionSerializer(suggestion, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            suggestion = CustomerSuggestion.objects.get(pk=pk)
        except CustomerSuggestion.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        suggestion.delete()
        return Response({"detail": "Deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
