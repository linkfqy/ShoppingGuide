package com.rabbiter.em.entity;

import java.util.List;

public class UserInfo {
    private String username;
    private List<String> cartItems;
    private List<String> orderItems;
    private String currentFirstCategory;
    private String currentSecondCategory;
    private List<String> currentFirstCategoryList;
    private List<String> currentSecondCategoryList;
    private List<String> allItems;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<String> cartItems) {
        this.cartItems = cartItems;
    }

    public List<String> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<String> orderItems) {
        this.orderItems = orderItems;
    }

    public String getCurrentFirstCategory() {
        return currentFirstCategory;
    }

    public void setCurrentFirstCategory(String currentFirstCategory) {
        this.currentFirstCategory = currentFirstCategory;
    }

    public String getCurrentSecondCategory() {
        return currentSecondCategory;
    }

    public void setCurrentSecondCategory(String currentSecondCategory) {
        this.currentSecondCategory = currentSecondCategory;
    }

    public List<String> getCurrentFirstCategoryList() {
        return currentFirstCategoryList;
    }

    public void setCurrentFirstCategoryList(List<String> currentFirstCategoryList) {
        this.currentFirstCategoryList = currentFirstCategoryList;
    }

    public List<String> getCurrentSecondCategoryList() {
        return currentSecondCategoryList;
    }

    public void setCurrentSecondCategoryList(List<String> currentSecondCategoryList) {
        this.currentSecondCategoryList = currentSecondCategoryList;
    }

    public List<String> getAllItems() {
        return allItems;
    }

    public void setAllItems(List<String> allItems) {
        this.allItems = allItems;
    }
}
