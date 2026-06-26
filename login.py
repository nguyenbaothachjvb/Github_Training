#!/usr/bin/env python3
"""
Login module for GitHub Training
"""

def login(username, password):
    """Validate login credentials"""
    if not username or not password:
        return False
    print(f"Login successful for {username}")
    return True

def logout():
    """Logout user"""
    print("Logged out successfully")
    return True

if __name__ == "__main__":
    login("user123", "pass123")
    logout()
