package com.rabbiter.em.entity;

import java.util.List;

public class UserInfo {
    private String username;
    private List<String> cartItems;
    private List<String> orderItems;
    private String currentFirstCategory;
    private String currentSecondCategory;

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
}
